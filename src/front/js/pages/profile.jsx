import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Context } from "../store/appContext";

export const Profile = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate
    useEffect(()=> {
        if (!localStorage.getItem("accessToken")){
            navigate("/login")
        } else{
            actions.viewProfile()
        }
    },[])
    return (
        <>
        <p> this is your profile </p>
        </>
    );
};
