import React from 'react';
import styled from 'styled-components'
import Map from '../components/Map';
import Room from '../components/Room'


const HuntApp = () =>{
    return(
        <>
        <h2>Start the hunt</h2>
        <div className="row">
            <Map />
            <SideBar>
                <Card>
                    <Room />
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