import React from 'react';

const SignIn = () => {
    return (
        <div className=""></div>
        <div className="signInCard">
            <div className="form">
                <h2>Login</h2>
                <form>
                    <div className="inputBox">
                        <input type="text" placeholder="username" />
                        <div className="icon"><Icon icon="bx:bxs-user" /></div>
                    </div>
                    <div className="inputBox">
                        <input type="password" placeholder="password" />
                        <div className="icon"><Icon icon="ri:lock-password-fill" /></div>
                    </div>
                    <div className="inputBox">
                        
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignIn;