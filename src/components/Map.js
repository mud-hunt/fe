import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';

function Map({playerRoomId}) {
  const [mapData, setMapData] = useState(null);
  let rooms = null;
  const canvasRef = React.useRef(null);

  const canvasWidth = 500;
  const canvasHeight = 500;
  const distanceBetweenRooms = 10;
  const roomSize = 20;

  const getMapData = () => {
    setMapData([
      {
        id: 34,
        n_to: 0,
        s_to: 0,
        e_to: 47,
        w_to: 35
      },
      {
        id: 46,
        n_to: 0,
        s_to: 0,
        e_to: 67,
        w_to: 0
      },
      {
        id: 28,
        n_to: 29,
        s_to: 35,
        e_to: 0,
        w_to: 0
      },
      {
        id: 47,
        n_to: 0,
        s_to: 48,
        e_to: 0,
        w_to: 0
      },
      {
        id: 35,
        n_to: 50,
        s_to: 0,
        e_to: 0,
        w_to: 36
      },
      {
        id: 48,
        n_to: 0,
        s_to: 0,
        e_to: 69,
        w_to: 49
      },
      {
        id: 29,
        n_to: 30,
        s_to: 36,
        e_to: 0,
        w_to: 38
      },
      {
        id: 41,
        n_to: 0,
        s_to: 30,
        e_to: 0,
        w_to: 0
      },
      {
        id: 30,
        n_to: 41,
        s_to: 0,
        e_to: 0,
        w_to: 39
      },
      {
        id: 49,
        n_to: 0,
        s_to: 72,
        e_to: 0,
        w_to: 0
      },
      {
        id: 36,
        n_to: 0,
        s_to: 0,
        e_to: 0,
        w_to: 37
      },
      {
        id: 50,
        n_to: 0,
        s_to: 73,
        e_to: 0,
        w_to: 0
      },
      {
        id: 31,
        n_to: 42,
        s_to: 0,
        e_to: 32,
        w_to: 0
      },
      {
        id: 51,
        n_to: 0,
        s_to: 74,
        e_to: 0,
        w_to: 0
      },
      {
        id: 32,
        n_to: 33,
        s_to: 0,
        e_to: 0,
        w_to: 0
      },
      {
        id: 33,
        n_to: 0,
        s_to: 32,
        e_to: 0,
        w_to: 0
      },
      {
        id: 52,
        n_to: 0,
        s_to: 0,
        e_to: 0,
        w_to: 53
      },
      {
        id: 37,
        n_to: 52,
        s_to: 0,
        e_to: 0,
        w_to: 54
      },
      {
        id: 38,
        n_to: 0,
        s_to: 0,
        e_to: 0,
        w_to: 55
      },
      {
        id: 39,
        n_to: 0,
        s_to: 39,
        e_to: 0,
        w_to: 56
      },
      {
        id: 40,
        n_to: 59,
        s_to: 0,
        e_to: 0,
        w_to: 0
      },
      {
        id: 42,
        n_to: 61,
        s_to: 0,
        e_to: 0,
        w_to: 0
      },
      {
        id: 43,
        n_to: 62,
        s_to: 0,
        e_to: 0,
        w_to: 0
      },
      {
        id: 44,
        n_to: 0,
        s_to: 45,
        e_to: 65,
        w_to: 0
      },
      {
        id: 45,
        n_to: 0,
        s_to: 0,
        e_to: 66,
        w_to: 0
      },
      {
        id: 59,
        n_to: 0,
        s_to: 0,
        e_to: 60,
        w_to: 0
      },
      {
        id: 56,
        n_to: 57,
        s_to: 0,
        e_to: 0,
        w_to: 0
      },
      {
        id: 61,
        n_to: 0,
        s_to: 42,
        e_to: 0,
        w_to: 60
      },
      {
        id: 60,
        n_to: 87,
        s_to: 0,
        e_to: 61,
        w_to: 0
      },
      {
        id: 93,
        n_to: 0,
        s_to: 94,
        e_to: 0,
        w_to: 0
      },
      {
        id: 95,
        n_to: 0,
        s_to: 96,
        e_to: 0,
        w_to: 0
      },
      {
        id: 98,
        n_to: 97,
        s_to: 0,
        e_to: 0,
        w_to: 0
      },
      {
        id: 97,
        n_to: 0,
        s_to: 98,
        e_to: 0,
        w_to: 0
      },
      {
        id: 70,
        n_to: 0,
        s_to: 101,
        e_to: 99,
        w_to: 71
      },
      {
        id: 72,
        n_to: 0,
        s_to: 103,
        e_to: 0,
        w_to: 0
      },
      {
        id: 74,
        n_to: 0,
        s_to: 105,
        e_to: 0,
        w_to: 0
      },
      {
        id: 79,
        n_to: 80,
        s_to: 0,
        e_to: 0,
        w_to: 112
      },
      {
        id: 53,
        n_to: 0,
        s_to: 0,
        e_to: 0,
        w_to: 78
      },
      {
        id: 55,
        n_to: 56,
        s_to: 0,
        e_to: 0,
        w_to: 0
      },
      {
        id: 57,
        n_to: 58,
        s_to: 0,
        e_to: 0,
        w_to: 0
      },
      {
        id: 58,
        n_to: 85,
        s_to: 0,
        e_to: 0,
        w_to: 0
      },
      {
        id: 94,
        n_to: 93,
        s_to: 0,
        e_to: 0,
        w_to: 65
      },
      {
        id: 89,
        n_to: 124,
        s_to: 0,
        e_to: 0,
        w_to: 0
      },
      {
        id: 62,
        n_to: 89,
        s_to: 0,
        e_to: 63,
        w_to: 0
      },
      {
        id: 63,
        n_to: 0,
        s_to: 0,
        e_to: 64,
        w_to: 0
      },
      {
        id: 64,
        n_to: 0,
        s_to: 0,
        e_to: 93,
        w_to: 0
      },
      {
        id: 65,
        n_to: 0,
        s_to: 0,
        e_to: 94,
        w_to: 0
      },
      {
        id: 66,
        n_to: 0,
        s_to: 0,
        e_to: 95,
        w_to: 0
      },
      {
        id: 67,
        n_to: 0,
        s_to: 68,
        e_to: 0,
        w_to: 0
      },
      {
        id: 69,
        n_to: 68,
        s_to: 0,
        e_to: 0,
        w_to: 48
      },
      {
        id: 68,
        n_to: 0,
        s_to: 69,
        e_to: 97,
        w_to: 0
      },
      {
        id: 102,
        n_to: 0,
        s_to: 0,
        e_to: 101,
        w_to: 0
      },
      {
        id: 104,
        n_to: 73,
        s_to: 0,
        e_to: 103,
        w_to: 0
      },
      {
        id: 71,
        n_to: 0,
        s_to: 0,
        e_to: 0,
        w_to: 72
      },
      {
        id: 75,
        n_to: 0,
        s_to: 106,
        e_to: 0,
        w_to: 0
      },
      {
        id: 73,
        n_to: 0,
        s_to: 104,
        e_to: 0,
        w_to: 74
      },
      {
        id: 81,
        n_to: 0,
        s_to: 80,
        e_to: 0,
        w_to: 0
      },
      {
        id: 76,
        n_to: 0,
        s_to: 107,
        e_to: 0,
        w_to: 77
      },
      {
        id: 77,
        n_to: 0,
        s_to: 108,
        e_to: 0,
        w_to: 0
      },
      {
        id: 80,
        n_to: 81,
        s_to: 0,
        e_to: 0,
        w_to: 0
      },
      {
        id: 82,
        n_to: 83,
        s_to: 0,
        e_to: 0,
        w_to: 0
      },
      {
        id: 86,
        n_to: 121,
        s_to: 0,
        e_to: 0,
        w_to: 0
      },
      {
        id: 83,
        n_to: 84,
        s_to: 0,
        e_to: 0,
        w_to: 0
      },
      {
        id: 84,
        n_to: 0,
        s_to: 0,
        e_to: 85,
        w_to: 0
      },
      {
        id: 88,
        n_to: 0,
        s_to: 0,
        e_to: 89,
        w_to: 0
      },
      {
        id: 87,
        n_to: 122,
        s_to: 0,
        e_to: 88,
        w_to: 0
      },
      {
        id: 90,
        n_to: 125,
        s_to: 0,
        e_to: 91,
        w_to: 0
      },
      {
        id: 91,
        n_to: 0,
        s_to: 0,
        e_to: 92,
        w_to: 0
      },
      {
        id: 96,
        n_to: 0,
        s_to: 97,
        e_to: 0,
        w_to: 0
      },
      {
        id: 92,
        n_to: 127,
        s_to: 93,
        e_to: 0,
        w_to: 0
      },
      {
        id: 99,
        n_to: 0,
        s_to: 100,
        e_to: 0,
        w_to: 0
      },
      {
        id: 100,
        n_to: 0,
        s_to: 0,
        e_to: 0,
        w_to: 101
      },
      {
        id: 103,
        n_to: 0,
        s_to: 0,
        e_to: 0,
        w_to: 104
      },
      {
        id: 54,
        n_to: 0,
        s_to: 0,
        e_to: 0,
        w_to: 79
      },
      {
        id: 105,
        n_to: 74,
        s_to: 0,
        e_to: 0,
        w_to: 0
      },
      {
        id: 108,
        n_to: 0,
        s_to: 0,
        e_to: 0,
        w_to: 109
      },
      {
        id: 118,
        n_to: 0,
        s_to: 0,
        e_to: 119,
        w_to: 0
      },
      {
        id: 78,
        n_to: 0,
        s_to: 0,
        e_to: 0,
        w_to: 111
      },
      {
        id: 119,
        n_to: 0,
        s_to: 0,
        e_to: 120,
        w_to: 0
      },
      {
        id: 85,
        n_to: 120,
        s_to: 0,
        e_to: 0,
        w_to: 0
      },
      {
        id: 109,
        n_to: 110,
        s_to: 0,
        e_to: 0,
        w_to: 0
      },
      {
        id: 101,
        n_to: 0,
        s_to: 0,
        e_to: 0,
        w_to: 102
      },
      {
        id: 106,
        n_to: 0,
        s_to: 0,
        e_to: 0,
        w_to: 107
      },
      {
        id: 120,
        n_to: 0,
        s_to: 0,
        e_to: 121,
        w_to: 0
      },
      {
        id: 107,
        n_to: 0,
        s_to: 0,
        e_to: 0,
        w_to: 108
      },
      {
        id: 110,
        n_to: 111,
        s_to: 0,
        e_to: 0,
        w_to: 0
      },
      {
        id: 111,
        n_to: 112,
        s_to: 0,
        e_to: 0,
        w_to: 0
      },
      {
        id: 121,
        n_to: 0,
        s_to: 0,
        e_to: 122,
        w_to: 0
      },
      {
        id: 112,
        n_to: 113,
        s_to: 0,
        e_to: 0,
        w_to: 0
      },
      {
        id: 122,
        n_to: 0,
        s_to: 87,
        e_to: 0,
        w_to: 121
      },
      {
        id: 113,
        n_to: 114,
        s_to: 0,
        e_to: 0,
        w_to: 0
      },
      {
        id: 123,
        n_to: 0,
        s_to: 0,
        e_to: 124,
        w_to: 0
      },
      {
        id: 114,
        n_to: 115,
        s_to: 0,
        e_to: 0,
        w_to: 0
      },
      {
        id: 115,
        n_to: 116,
        s_to: 0,
        e_to: 0,
        w_to: 0
      },
      {
        id: 124,
        n_to: 0,
        s_to: 0,
        e_to: 125,
        w_to: 0
      },
      {
        id: 116,
        n_to: 117,
        s_to: 0,
        e_to: 0,
        w_to: 0
      },
      {
        id: 125,
        n_to: 0,
        s_to: 90,
        e_to: 0,
        w_to: 124
      },
      {
        id: 117,
        n_to: 118,
        s_to: 0,
        e_to: 0,
        w_to: 0
      },
      {
        id: 126,
        n_to: 0,
        s_to: 0,
        e_to: 127,
        w_to: 0
      },
      {
        id: 127,
        n_to: 0,
        s_to: 92,
        e_to: 0,
        w_to: 126
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
        canvasWidth / 2 +
        (room.posX - rooms[playerRoomId].posX) * (distanceBetweenRooms + roomSize);
      const roomPosY =
        canvasHeight / 2 +
        (room.posY - rooms[playerRoomId].posY) * (distanceBetweenRooms + roomSize);
      ctx.fillRect(
        roomPosX - roomSize / 2,
        roomPosY - roomSize / 2,
        roomSize,
        roomSize
      );
      ctx.fillStyle = "#000000";
      ctx.font = "16px Arial";
      ctx.fillText(room.id, roomPosX + roomSize / 2, roomPosY - roomSize / 2);

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
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    for (let key in rooms) {
      drawRoom(rooms[key]);
    }
  };

  useEffect(() => {
    getMapData();
  }, []);

  useEffect(() => {
    rooms = generateRooms();
    drawMap();
  }, [mapData]);

  return (
    <StyledCanvas ref={canvasRef} width={canvasWidth} height={canvasHeight} />
  );
}

Map.propTypes = {
  playerRoomId: PropTypes.number.isRequired,
}

const StyledCanvas = styled.canvas`
  border: 1px solid white;
`;

export default Map;
