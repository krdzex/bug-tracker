import { Icon } from '@iconify/react';
import React, { useState } from 'react';

const SignIn = () => {
    const [values, setValues] = useState({
user
    })

    const onChange = name => event => {
        setValues({ ...values, [name]: event.target.value })
    }

    const onRelease = () => {
        if (values.priority === "") {
            setValues({ ...values, priority: bugInfo.priority })
        }
    }

    return (
        <div className="registrationWrapper">
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
        </div>
    );
};

export default SignIn;