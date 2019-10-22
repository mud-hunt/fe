import React from 'react'
import { Link } from 'react-router-dom';


const Welcome = (props) => {

    const onNext = (event) =>{
        event.preventDefault();
        
    }
        return(
            <>
            <div className="row">
                <h1>Welcome to Mud-Hunt</h1>
            </div>
            <div className="row to-the-right">
                <Link to="/auth">
                    <button>LETS PLAY</button>
                </Link>
            </div>
            </>
        )    
}

export default Welcome;