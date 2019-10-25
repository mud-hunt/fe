import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';
import { getMapData } from '../authHandlers/authHandlers'; 
import { async } from "q";

function Map({playerRoomId}) {
  const [mapData, setMapData] = useState(null);
  //const [roomId, setRoomId] = useState(null);
  const [rooms, setRooms] = useState(null);
  const [middleX, setMiddleX] = useState(0);
  const [middleY, setMiddleY] = useState(0);
  const canvasRef = React.useRef(null);

  const canvasWidth = 500;
  const canvasHeight = 500;
  const distanceBetweenRooms = 20;
  const roomSize = 25;


  const generateRooms = () => {
    if (!mapData) return null;
    const rooms = {};
    for (let room of mapData) {
      rooms[room.id] = room;
    }

    const addedRooms = {};

    let maxX = -9999;
    let maxY = -9999;
    let minX = 9999;
    let minY = 9999;

    const recurRooms = (room, posX = 0, posY = 0) => {
      if (posX > maxX) maxX = posX;
      if (posX < minX) minX = posX;
      if (posY > maxY) maxY = posY;
      if (posY < minY) minY = posY;

      room.posX = posX;
      room.posY = posY;
      addedRooms[room.id] = true;
      if (room.n_to !== 0 && !addedRooms[room.n_to]) {
        recurRooms(rooms[room.n_to], posX, posY - 1);
      }
      if (room.s_to !== 0 && !addedRooms[room.s_to]) {
        recurRooms(rooms[room.s_to], posX, posY + 1);
      }
      if (room.w_to !== 0 && !addedRooms[room.w_to]) {
        recurRooms(rooms[room.w_to], posX - 1, posY);
      }
      if (room.e_to !== 0 && !addedRooms[room.e_to]) {
        recurRooms(rooms[room.e_to], posX + 1, posY);
      }
    };

    recurRooms(rooms[Object.keys(rooms)[0]]);

    setMiddleX(maxX + minX - 0.5);
    setMiddleY(maxY + minY - 0.5);

    return rooms;
  };

  const drawMap = () => {
    const drawLine = (fromX, fromY, toX, toY) => {
      ctx.beginPath();
      ctx.lineWidth = 5;
      ctx.moveTo(fromX, fromY);
      ctx.lineTo(toX, toY);
      ctx.stroke();
    };

    const drawRoom = room => {
      ctx.fillStyle = "#FFFFFF";
      ctx.strokeStyle = "#FFFFFF";
      const roomPosX =
        canvasWidth / 2 +
        (room.posX - middleX) * (distanceBetweenRooms + roomSize);
      const roomPosY =
        canvasHeight / 2 +
        (room.posY - middleY) * (distanceBetweenRooms + roomSize);
      ctx.fillRect(
        roomPosX - roomSize / 2,
        roomPosY - roomSize / 2,
        roomSize,
        roomSize
      );

      if (room.n_to) {
        const otherRoomPosX = roomPosX;
        const otherRoomPosY = roomPosY - roomSize - distanceBetweenRooms;
        drawLine(
          roomPosX,
          roomPosY,
          otherRoomPosX,
          otherRoomPosY + roomSize / 2
        );
      }
      if (room.s_to) {
        const otherRoomPosX = roomPosX;
        const otherRoomPosY = roomPosY + roomSize + distanceBetweenRooms;
        drawLine(
          roomPosX,
          roomPosY,
          otherRoomPosX,
          otherRoomPosY - roomSize / 2
        );
      }
      if (room.w_to) {
        const otherRoomPosX = roomPosX - roomSize - distanceBetweenRooms;
        const otherRoomPosY = roomPosY;
        drawLine(
          roomPosX,
          roomPosY,
          otherRoomPosX + roomSize / 2,
          otherRoomPosY
        );
      }
      if (room.e_to) {
        const otherRoomPosX = roomPosX + roomSize + distanceBetweenRooms;
        const otherRoomPosY = roomPosY;
        drawLine(
          roomPosX,
          roomPosY,
          otherRoomPosX - roomSize / 2,
          otherRoomPosY
        );
      }

      if (room.id === playerRoomId) {
        ctx.fillStyle = "#8FD64A";

        const offset = roomSize / 3;
        ctx.fillRect(
          roomPosX - roomSize / 1.5 + offset,
          roomPosY - roomSize / 1.5 + offset,
          roomSize - offset,
          roomSize - offset
        );
      }
    };
    if (!rooms) return;
    const ctx = canvasRef.current.getContext("2d");
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    for (let key in rooms) {
      drawRoom(rooms[key]);
    }
  };

  useEffect(() => {
    const loadData = async ()=>{
      const mapData = await getMapData();
      setMapData(mapData)  
    }
    loadData();
  }, []);

  useEffect(() => {
    setRooms(generateRooms());
  }, [mapData]);

  useEffect(()=>{
    drawMap();
  }, [rooms, playerRoomId]
  );
  return (
    <canvas ref={canvasRef} width={canvasWidth} height={canvasHeight} />
  );
}

Map.propTypes = {
  playerRoomId: PropTypes.number.isRequired,
}

export default Map;
