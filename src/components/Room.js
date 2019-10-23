import React from 'react'
import styled from 'styled-components'
import compass from '../assets/compass-2.png'

function Room(){
    return(
        <>
        <CardTitle>
        <h3>Room 12</h3>
        </CardTitle>
        <CardContent>
            <h4>Player Name</h4>
            <p>Instriction to player</p>
            <h4>Description</h4>
            <p>Room description</p>
            <h4>Current players</h4>
            <p>Info and data </p>
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