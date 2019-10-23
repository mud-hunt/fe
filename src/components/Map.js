import React, { useEffect, useState } from "react";
import styled from "styled-components";

function Map() {
  const [mapData, setMapData] = useState(null);
  const canvasRef = React.useRef(null);

  const canvasWidth = 500;
  const canvasHeight = 500;
  const roomSize = 20;

  const getMapData = () => {
    setMapData([
      {
        id: 0,
        n_to: 1,
        s_to: null,
        e_to: null,
        w_to: null
      },
      {
        id: 1,
        n_to: null,
        s_to: 0,
        e_to: null,
        w_to: null
      }
    ]);
  };

  const generateMapArray = () => {
    if (!mapData) return null;
    const dataWithMarks = mapData.map(data => {
      return { ...data, marked: false };
    });

    const mapArray = [];
    for (let i = 0; i < 20; i++) {
      mapArray.push([]);
      for (let j = 0; j < 20; j++) {
        mapArray[i].push(null);
      }
    }
    const firstRoom = dataWithMarks.find(data => data.id === 0);
    mapArray[10][10] = firstRoom;

    const queue = [];
    queue.push(firstRoom);
    firstRoom.marked = true;
    firstRoom.posX = 10;
    firstRoom.posY = 10;
    while (queue.length > 0) {
      const w = queue.shift();
      if (w.n_to !== null) {
        const x = dataWithMarks.find(data => data.id === w.n_to);
        if (!x.marked) {
          mapArray[w.posX][w.posY - 1] = x;
          x.posX = w.posX;
          x.posY = w.posY - 1;
          x.marked = true;
          queue.push(x);
        }
      }
      if (w.s_to !== null) {
        const x = dataWithMarks.find(data => data.id === w.s_to);
        if (!x.marked) {
          mapArray[w.posX][w.posY + 1] = x;
          x.posX = w.posX;
          x.posY = w.posY + 1;
          x.marked = true;
          queue.push(x);
        }
      }
      if (w.w_to !== null) {
        const x = dataWithMarks.find(data => data.id === w.w_to);
        if (!x.marked) {
          mapArray[w.posX - 1][w.posY] = x;
          x.posX = w.posX - 1;
          x.posY = w.posY;
          x.marked = true;
          queue.push(x);
        }
      }
      if (w.e_to !== null) {
        const x = dataWithMarks.find(data => data.id === w.e_to);
        if (!x.marked) {
          mapArray[w.posX + 1][w.posY] = x;
          x.posX = w.posX + 1;
          x.posY = w.posY;
          x.marked = true;
          queue.push(x);
        }
      }
    }
    return mapArray;
  };

  const drawMap = () => {
    const drawLine = (fromX, fromY, toX, toY) => {
      ctx.beginPath();
      ctx.lineWidth = 2;
      ctx.moveTo(fromX, fromY);
      ctx.lineTo(toX, toY);
      ctx.stroke();
    };
    const ctx = canvasRef.current.getContext("2d");
    const mapArray = generateMapArray();
    if (!mapArray) return;

    for (let x = 0; x < mapArray.length; x++) {
      for (let y = 0; y < mapArray[0].length; y++) {
        if (mapArray[x][y]) {
          const roomPosX = (canvasWidth / mapArray.length) * x;
          const roomPosY = (canvasHeight / mapArray[0].length) * y;
          ctx.fillRect(
            roomPosX - roomSize / 2,
            roomPosY - roomSize / 2,
            roomSize,
            roomSize
          );

          if (mapArray[x][y].n_to != null) {
            const otherRoomPosX = roomPosX;
            const otherRoomPosY = roomPosY - roomSize;
            drawLine(roomPosX, roomPosY, otherRoomPosX, otherRoomPosY);
          }
          if (mapArray[x][y].s_to != null) {
            const otherRoomPosX = roomPosX;
            const otherRoomPosY = roomPosY + roomSize;
            drawLine(roomPosX, roomPosY, otherRoomPosX, otherRoomPosY);
          }
          if (mapArray[x][y].w_to != null) {
            const otherRoomPosX = roomPosX - roomSize;
            const otherRoomPosY = roomPosY;
            drawLine(roomPosX, roomPosY, otherRoomPosX, otherRoomPosY);
          }
          if (mapArray[x][y].e_to != null) {
            const otherRoomPosX = roomPosX + roomSize;
            const otherRoomPosY = roomPosY;
            drawLine(roomPosX, roomPosY, otherRoomPosX, otherRoomPosY);
          }
        }
      }
    }
  };

  useEffect(() => {
    getMapData();
  }, []);

  useEffect(() => {
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
