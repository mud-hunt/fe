import React, { useState } from 'react'


const Auth = (props) => {

    const [ action, setAction ] = useState('register')
    
    const [details, updateInputChangeState] = useState({
        username: '',
        password1: '',
        password2: ''
    });

    const handleChange = (event) => {
        event.preventDefault();
        updateInputChangeState({
            ...details,
            [event.target.name]: event.target.value,
        });      
    };

    const toggleStyle = (event) =>{
        event.preventDefault();
        document.getElementById('login').classList.toggle('blur');
        document.getElementById('register').classList.toggle('blur');
        setAction(event.target.id);
    }

    const onSubmit = (event) =>{
        event.preventDefault();
        console.log("submitting");
        
    }

        return(
            <>
            <div className="row center">
                <h2>Before you play</h2>
            </div>
            <div className="row center">
                    <h3 id="register" onClick={toggleStyle} className="title-choice">Register</h3>
                    <h3>|</h3>
                    <h3 id="login" onClick={toggleStyle} className="title-choice blur">Login</h3>
                </div>
                <form onSubmit={onSubmit}>
                    <div className="row center">
                    <input
                        type="text"
                        placeholder="Your user name"
                        name="username"
                        className="half"
                        value={details.username}
                        onChange={handleChange}
                    />
                    </div>
                    <div className="row center">
                    <input
                        type="password"
                        placeholder="Password"
                        name="password1"
                        className="half"
                        value={details.password1}
                        onChange={handleChange}
                    />
                    </div>
                    <div className="row center">
                    {
                        action == 'register' &&
                        <input
                        type="password"
                        placeholder="Confirm password"
                        name="password2"
                        className="half"
                        value={details.password2}
                        onChange={handleChange}
                    />
                    }
                    </div>
                    <div className="row center">
                        <button className="big">SUBMIT</button>
                    </div>
                </form>
            </>
        )    
}

export default Auth;