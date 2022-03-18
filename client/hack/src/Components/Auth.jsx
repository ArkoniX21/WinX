import React from 'react';
import Fetchdata from '../Utils/fetchdata';
import { useState, useEffect } from 'react';
import {useNavigate} from "react-router-dom";

const Login = ({setUser}) => {
    const fetchdata = new Fetchdata()
    const navigate = useNavigate();

    const[login, setLogin] = useState(() =>{
        return {
            email: "",
            password: ""
        }
    })
    return (
        <div>
            
        </div>
    );
};

export default Login;