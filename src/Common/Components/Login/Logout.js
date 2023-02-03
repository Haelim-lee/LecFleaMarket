import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

function Logout({callback}){
    const navigate = useNavigate();

    useEffect(() => {
        window.sessionStorage.removeItem("user");
        callback();
        navigate('/');
    });

    return (
        <></>
    )
}

export default Logout;