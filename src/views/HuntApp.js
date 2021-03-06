import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Pusher from 'pusher-js';
import Map from '../components/Map';
import Room from '../components/Room';
import Chat from '../components/Chat';
import { getRoomData, moveToRoom } from '../authHandlers/authHandlers';
import compass from "../assets/compass-2.png";
import { getToken } from "../helpers/getToken";
import { Redirect } from "react-router-dom"

const HuntApp = () =>{
    const [room, setRoom] = useState(null)
    const [error, setError] = useState(false)
    const [pusher, setPusher] = useState();

    const loadRoom = async () =>{
        const currentRoom = await getRoomData();
        if (currentRoom !== 'error'){
            setRoom(currentRoom);
        }
        else {
            setError(true)
        }
    }
    
    useEffect(()=>{
        if(!room){
            loadRoom();
        }
    }, [room]
    )

    useEffect(() => {
      setPusher(
        new Pusher("ad5fb0ce29a28bd2cd61", {
          cluster: "eu",
          encrypted: false
        })
      );
    }, []);

    const move = async (direction) =>{
        const newRoom = await moveToRoom(direction);
        console.log('newRoom', newRoom)
        if (newRoom !== 'error'){
            // call init again to get the new room info
            //loadRoom();
            setRoom(newRoom);
        }
    }

    if(!getToken()){
        return <Redirect to="/auth" />
    }    


    return(
        <Container>
        <h2>Start the hunt</h2>
        {
            error ? <div>An error as occured, please try later</div>
            : (
                <>
                <GamePanel className="row">
                {
                    room ? <Map playerRoomId={room.roomId} />
                    : <h4>Loading Map</h4>
                }
                <SideBar>
                    <Card>
                        <Room room={room} move={move}/>
                    </Card>
                </SideBar>
            </GamePanel>
            <Chat pusher={pusher} />
            </>
            )
        }
        </Container>
    );
}

export default HuntApp;

const Container = styled.section`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const GamePanel = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  width: 50%;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid white;
  margin: 10px;
`;

const CardTitle = styled.div`
  background:white h3 {
    color: #ff7577;
  }
`;

const CardContent = styled.div`
  color: white;
  padding-left: 5px;
  h4 {
    text-align: left;
  }
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-around;
  background:white h3 {
    color: #ff7577;
  }
`;

const Direction = styled.div`
  width: 15%;
  background: white;
  text-align: center;
  h4 {
    color: #ff7577;
  }
`;

const Compass = styled.div`
  width: 20%;
  text-align: right;
  margin: 10px;
  img {
    opacity: 0.8;
  }
`;


