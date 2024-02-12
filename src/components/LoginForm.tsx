import React, { FC } from "react";
import { Link } from "react-router-dom";

import { useUser } from "../contexts/UserContext";

import '../App.css';

export const LoginForm: FC = () => {
    const {
        isAuthenticated,
        setAuthenticated,
    } = useUser();

    const handleLogin = () => {
        setAuthenticated(true);
        sessionStorage.setItem("isAuthenticated", "true");
    };

    return (
        <div className='login'>
            {isAuthenticated ? (
                <p>You are already logged in!</p>
            ) : (
                <button onClick={handleLogin}>Login</button>
            )}
            <Link to='/user'>User page</Link>
        </div>
    );
};
