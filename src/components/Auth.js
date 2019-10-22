import React from 'react'


const Auth = (props) => {

    const toggleStyle = (event) =>{
        event.preventDefault();
        document.getElementById('login').classList.toggle('blur');
        document.getElementById('register').classList.toggle('blur');
        console.log('toggles', event.target.id);

    }

        return(
            <>
            <div className="row">
                <h3 id="register" onClick={toggleStyle} className="title-choice">Register</h3>
                <h3>|</h3>
                <h3 id="login" onClick={toggleStyle} className="title-choice blur">Login</h3>
            </div>
            <div className="row to-the-right">
                <form>
                <div className="row">
                <input
                    type="text"
                    placeholder="Your user name"
                    name="username"
                />
                </div>
                <div className="row">
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="half"
                />
                </div>
                <div className="row">
                <input
                    type="password"
                    placeholder="Confirm password"
                    name="password"
                    className="half"
                />
                </div>
                <div className="row to-the-right">
                    <button>SUBMIT</button>
                </div>
                </form>
                
            </div>
            </>
        )    
}

export default Auth;