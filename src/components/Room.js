import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import compass from '../assets/compass-2.png'


const getRoomDetails = ()=>{
    // should call axios --> init end-point
    return {
        "uuid": "14544c34-6edc-4d94-b44d-ddf5538188fb",
        "name": "testuser",
        "roomId": 28,
        "title": "Et et consequat eu elit in laboris dolor mollit.",
        "description": "Quis incididunt consectetur nisi laborum mollit voluptate.",
        "players": ['player1', 'player2', 'player3']
    }
}

function Room(){

    const [room, setRoom] = useState({
        "name": "",
        "roomId": null,
        "title": "",
        "description": "",
        "players": []
    })
    
    useEffect(()=>{
            const currentRoom = getRoomDetails();
            setRoom(currentRoom)
        }
    )


    return(
        <>
        <CardTitle>
        <h3>Room {room.roomId}</h3>
        </CardTitle>
        <CardContent>
            <h4>Hi {room.name}</h4>
            <p>{room.title}</p>
            <h4>Description</h4>
            <p>{room.description}</p>
            <h4>They are currently playing</h4>
            {
                room.players.map((player, index) => (
                    <li key={index}>{player}</li>
                ))
            }
        </CardContent>
        <CardFooter>
            <Direction><h4>N</h4></Direction>
            <Direction><h4>S</h4></Direction>
            <Direction><h4>E</h4></Direction>
            <Direction><h4>W</h4></Direction>    
            <Compass>
                <img src={compass} />
            </Compass>                
        </CardFooter>
        </>
    );
}

export default Room

const CardTitle = styled.div`
    background:white
    h3{
        color:#ff7577;
    }
`;

const CardContent = styled.div`
    color:white;
    padding-left:5px;
    h4{
        text-align:left;
    }
`;

const CardFooter = styled.div`
    display:flex;
    justify-content:space-around;
    background:white
    h3{
        color:#ff7577;
    }
`;

const Direction = styled.div`
    width:15%;
    background:white;
    text-align:center;
    h4{
        color:#ff7577;
    }
`;

const Compass = styled.div`
    width:20%;
    text-align:right;
    margin:10px;
    img{
        opacity:0.8;
    }
`;