import React from 'react'
import { Link } from 'react-router-dom';


const Welcome = () => {

        return(
            <>
            <div className="row">
                <h1>Welcome to Mud-Hunt</h1>
            </div>
            <div className="row center">
                <Link to="/auth">
                    <button className="big">LETS PLAY</button>
                </Link>
            </div>
            </>
        )    
}

export default Welcome;