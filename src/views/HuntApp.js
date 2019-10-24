import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import Map from '../components/Map';
import Room from '../components/Room';
import { getRoomData, moveToRoom } from '../authHandlers/authHandlers';
import { async } from 'q';


const HuntApp = () =>{
    const [room, setRoom] = useState(null)
    const [error, setError] = useState(false)

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

    const move = async (direction) =>{
        const newRoom = await moveToRoom(direction);
        console.log('newRoom', newRoom)
        if (newRoom !== 'error'){
            // call init again to get the new room info
            //loadRoom();
            setRoom(newRoom);
        }
    }

    return(
        <>
        <h2>Start the hunt</h2>
        {
            error ? <div>An error as occured, please try later</div>
            : (
                <>
                <div className="row">
                {
                    room ? <Map playerRoomId={room.roomId} />
                    : <h4>Loading Map</h4>
                }
                <SideBar>
                    <Card>
                        <Room room={room} move={move}/>
                    </Card>
                </SideBar>
            </div>    
            </>
            )
        }
        </>
    );
}

export default HuntApp


const SideBar = styled.div`
    display:flex;
    flex-direction:column;
    margin-left:10px;
    width:25%;
`;

const Card = styled.div`
    display:flex;
    flex-direction:column;
    border:1px solid white;
    margin:10px;
`;