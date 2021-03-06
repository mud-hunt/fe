import React from 'react';
import styled from 'styled-components';
import compass from '../assets/compass-2.png';

const Room = (props) => {
    const { room, move } = props;
    // const moveTo = (event) => {
    //     event.preventDefault();
    // }

    if(!room && room !== 'error'){
        return(
            <h4>Loading</h4>
        )
    }
    else if(room === 'error'){
        return(
            <h4>Error loading the Room data</h4>
        )
    }
    
    else {
        return(
            <>
            <CardTitle>
            <h3>Room {room.roomId}</h3>
            </CardTitle>
            <CardContent>
            { room
                ? (
                    <>
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
                    </>   
                )
                : <h4>Loading</h4>
            }
            </CardContent>
            <CardFooter>
                <Direction><h4 onClick={()=>{move('n');}}>N</h4></Direction>
                <Direction><h4 onClick={()=>{move('s');}}>S</h4></Direction>
                <Direction><h4 onClick={()=>{move('e');}}>E</h4></Direction>
                <Direction><h4 onClick={()=>{move('w');}}>W</h4></Direction>    
                <Compass>
                    <img src={compass} />
                </Compass>                
            </CardFooter>
            </>
        );    
    }
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
    background:none;
    text-align:center;
    h4{
        color:#ff7577;
    }
    :hover{
        cursor: pointer;
        transition: all 0.3s ease 0s;
        transform: translateY(-7px);
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