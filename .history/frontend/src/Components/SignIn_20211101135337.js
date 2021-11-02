import { Icon } from '@iconify/react';
import React, { useState } from 'react';
import { signIn } from '../ApiService/authApi';

const SignIn = () => {
    const [errors, setErrors] = useState({})


    const [values, setValues] = useState({
        userName: "",
        password: "",
        role: ""
    })

    const onChange = name => event => {
        setValues({ ...values, [name]: event.target.value })
    }

    const onRelease = () => {
        if (values.role === "") {
            setValues({ ...values, role: "" })
        }
    }
    const [firstTime, setFirstTime] = useState(true)
    const onSubmit = () =>{
        let user = {
            userName: values.userName || undefined,
            password: values.password || undefined,
            role: values.role || undefined
        }
        signIn(user).then()
    }
    return (
        <div className="registrationWrapper">
            <div className="signInCard">
                <div className="form">
                    <h2>Login</h2>
                    <form>
                        <div className="inputBox">
                            <input type="text" placeholder="username" className={errors.username ? "error" : "success"} />
                            <div className="icon"><Icon icon="bx:bxs-user" /></div>
                            <span>Error</span>
                        </div>
                        <div className="inputBox">
                            <input type="password" placeholder="password" className={errors.password ? "error" : "success"} />
                            <div className="icon password"><Icon icon="ri:lock-password-fill" /></div>
                            <span>Error</span>
                        </div>
                        <div className="inputBox datalist">
                            <input type="text" list="role" className={errors.role ? "error" : "success"} placeholder="Choose your role" onMouseDown={() => setValues({ ...values, priority: "" })} value={values.priority} onKeyDown={(event) => {
                                event.preventDefault();
                            }} onChange={onChange("priority")} onBlur={() => onRelease()} />
                            <datalist id="role">
                                <option value="Admin" />
                                <option value="User" />

                            </datalist>
                            <span>Error</span>
                        </div>
                        <div className="inputBox">
                            <input type="submit" value="Login" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;