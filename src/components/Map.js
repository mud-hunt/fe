import React, { useEffect, useState } from "react";

function Map() {
  const [mapData, setMapData] = useState(null);
  const canvasRef = React.useRef(null);

  const getMapData = () => {
    setMapData([
      {
        id: 0,
        n_to: 1,
        s_to: null,
        e_to: null,
        w_to: null,
      },
      {
        id: 1,
        n_to: null,
        s_to: 0,
        e_to: null,
        w_to: null,
      },
    ]);
  }

  const generateMapArray = () => {
    const dataWithMarks = mapData.map(data => {
      return {...data, marked: false};
    })

    const mapArray = [100][100];
    const firstRoom = dataWithMarks.find(data => data.id === 0);
    mapArray[50][50] = firstRoom;

    const queue = [];
    queue.push(firstRoom);
    firstRoom.marked = true;
    firstRoom.posX = 50;
    firstRoom.posY = 50;
    while (queue.length > 0) {
      const w = queue.shift();
      if (w.n_to) {
        const x = w.n_to;
        if (!x.marked) {
          mapArray[w.posX][w.posY - 1] = x;
          x.posX = w.posX;
          x.posY = w.posY - 1;
          x.marked = true;
          queue.push(x);
        }
      }
      if (w.s_to) {
        const x = w.s_to;
        if (!x.marked) {
          mapArray[w.posX][w.posY + 1] = x;
          x.posX = w.posX;
          x.posY = w.posY + 1;
          x.marked = true;
          queue.push(x);
        }
      }
      if (w.w_to) {
        const x = w.w_to;
        if (!x.marked) {
          mapArray[w.posX - 1][w.posY] = x;
          x.posX = w.posX - 1;
          x.posY = w.posY;
          x.marked = true;
          queue.push(x);
        }
      }
      if (w.e_to) {
        const x = w.e_to;
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
  }

  const drawMap = () => {
    const ctx = canvasRef.current.getContext('2d');
    const mapArray = generateMapArray();

    for (let x = 0; x < mapArray.length; x++) {
      for (let y = 0; y < mapArray[0].length; y++) {
        ctx.fillRect(500 / (mapArray.length * x), 500 / (mapArray[0].length * y), 10, 10);
      }  
    }
  }

  useEffect(() => {
    getMapData();
  }, []);

  useEffect(() => {
    drawMap();
  }, [mapData]);

  return <canvas ref={canvasRef} width="500" height="500" />;
}

export default Map;
