import React, { useState } from 'react'


const Auth = (props) => {

    const [ action, setAction ] = useState('register')
    
    const [details, updateInputChangeState] = useState({
        email: '',
        password1: '',
        password2: ''
    });

    const handleChange = () => {
        console.log('changed')
    };

    const toggleStyle = (event) =>{
        event.preventDefault();
        document.getElementById('login').classList.toggle('blur');
        document.getElementById('register').classList.toggle('blur');
        console.log('toggles', event.target.id);
        setAction(event.target.id);
    }

        return(
            <>
            <div className="row center">
                <h2>Before you play</h2>
            </div>
            <div className="row">
                <h3 id="register" onClick={toggleStyle} className="title-choice">Register</h3>
                <h3>|</h3>
                <h3 id="login" onClick={toggleStyle} className="title-choice blur">Login</h3>
            </div>
                <form>
                <div className="row">
                <input
                    type="text"
                    placeholder="Your user name"
                    name="username"
                    value={details.username}
                    onChange={handleChange}
                />
                </div>
                <div className="row">
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="half"
                    value={details.password1}
                    onChange={handleChange}
                />
                </div>
                <div className="row">
                {
                    action == 'register' &&
                    <input
                    type="password"
                    placeholder="Confirm password"
                    value={details.password2}
                    name="password"
                    className="half"
                    onChange={handleChange}
                />
                }
                </div>
                <div className="row center">
                    <button>SUBMIT</button>
                </div>
                </form>
            </>
        )    
}

export default Auth;