import React, { useEffect, useState } from "react";
import styled from "styled-components";

function Map() {
  const [mapData, setMapData] = useState(null);
  let rooms = null;
  const canvasRef = React.useRef(null);

  let playersRoom = null;
  const canvasWidth = 500;
  const canvasHeight = 500;
  const distanceBetweenRooms = 10;
  const roomSize = 20;

  const getMapData = () => {
    setMapData([
      {
        id: 1,
        n_to: 2,
        s_to: 0,
        e_to: 0,
        w_to: 0
      },
      {
        id: 2,
        n_to: 0,
        s_to: 1,
        e_to: 0,
        w_to: 3
      },
      {
        id: 3,
        n_to: 0,
        s_to: 0,
        e_to: 2,
        w_to: 0
      }
    ]);
  };

  const generateRooms = () => {
    if (!mapData) return null;
    const rooms = {};
    for (let room of mapData) {
      rooms[room.id] = room;
    }

    const addedRooms = {};
    let maxX = 0;
    let maxY = 0;
    let minX = -9999;
    let minY = -9999;

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
    return rooms;
  };

  const drawMap = () => {
    const drawLine = (fromX, fromY, toX, toY) => {
      ctx.beginPath();
      ctx.lineWidth = 2;
      ctx.moveTo(fromX, fromY);
      ctx.lineTo(toX, toY);
      ctx.stroke();
    };

    const drawRoom = room => {
      ctx.fillStyle = "#FFFFFF";
      ctx.strokeStyle = "#FFFFFF";
      const roomPosX =
        canvasWidth / 2 + (room.posX - playersRoom.posX) * (distanceBetweenRooms + roomSize);
      const roomPosY =
        canvasHeight / 2 +
        (room.posY - playersRoom.posY) * (distanceBetweenRooms + roomSize);

      ctx.fillRect(
        roomPosX - roomSize / 2,
        roomPosY - roomSize / 2,
        roomSize,
        roomSize
      );

      if (room.n_to) {
        const otherRoomPosX = roomPosX;
        const otherRoomPosY = roomPosY - roomSize - distanceBetweenRooms;
        drawLine(roomPosX, roomPosY, otherRoomPosX, otherRoomPosY + roomSize / 2);
      }
      if (room.s_to) {
        const otherRoomPosX = roomPosX;
        const otherRoomPosY = roomPosY + roomSize + distanceBetweenRooms;
        drawLine(roomPosX, roomPosY, otherRoomPosX, otherRoomPosY - roomSize / 2);
      }
      if (room.w_to) {
        const otherRoomPosX = roomPosX - roomSize - distanceBetweenRooms;
        const otherRoomPosY = roomPosY;
        drawLine(roomPosX, roomPosY, otherRoomPosX + roomSize / 2, otherRoomPosY);
      }
      if (room.e_to) {
        const otherRoomPosX = roomPosX + roomSize + distanceBetweenRooms;
        const otherRoomPosY = roomPosY;
        drawLine(roomPosX, roomPosY, otherRoomPosX - roomSize / 2, otherRoomPosY);
      }

      if (room === playersRoom) {
        ctx.fillStyle = "#ff7577";

        const offset = roomSize / 3;
        ctx.fillRect(
          roomPosX - roomSize / 2 + offset,
          roomPosY - roomSize / 2 + offset,
          roomSize - offset * 2,
          roomSize - offset * 2
        );
      }
    };
    if (!rooms) return;
    const ctx = canvasRef.current.getContext("2d");
    for (let key in rooms) {
      drawRoom(rooms[key]);
    }
  };

  useEffect(() => {
    getMapData();
  }, []);

  useEffect(() => {
    rooms = generateRooms();
    if (rooms) playersRoom = rooms[Object.keys(rooms)[0]];
    drawMap();
  }, [mapData]);

  return (
    <StyledCanvas ref={canvasRef} width={canvasWidth} height={canvasHeight} />
  );
}

const StyledCanvas = styled.canvas`
  border: 1px solid white;
`;

export default Map;
