import React, { useContext } from "react";
import MyButton from "../components/UI/button/MyButton";
import MyInput from "../components/UI/input/MyInput";
import { AuthContext } from '../context/index';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const router = useNavigate();
    const { isAuth, setIsAuth } = useContext(AuthContext);
    const login = event => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true')
    }
    
    return (
        <div>
            <h1>Login in</h1>
            <form onSubmit={login}>
                <MyInput type='text' placeholder='Login' />
                <MyInput type='password' placeholder='Password' />
                <MyButton>Log in</MyButton>
            </form>
        </div>
    );
};

export default Login;