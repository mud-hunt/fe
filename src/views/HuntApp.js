import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import Map from '../components/Map';
import Room from '../components/Room';
import { getRoomData } from '../authHandlers/authHandlers';


const HuntApp = () =>{
    const [room, setRoom] = useState(null)
    
    useEffect(()=>{
        if(!room){
            const loadRoom = async () =>{
                const currentRoom = await getRoomData();
                console.log('currentRoom', currentRoom);  
                setRoom(currentRoom);
            }
            loadRoom();
        }
    }, [room]
    )

    if(room){
        console.log(room);  
    }

    return(
        <>
        <h2>Start the hunt</h2>
        <div className="row">
            <Map playerRoomId={29} />
            <SideBar>
                <Card>
                    <Room room={room}/>
                </Card>
            </SideBar>
        </div>
        </>
    );
}

export default HuntApp

// const RoomsMap = styled.div`
//     border:1px solid white;
//     width:70%;
//     height:auto;
//     margin-left:20px;
// `;

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