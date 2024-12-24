import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Registration = () => {
    const { store, actions } = useContext(Context);
    const [data, setData] = useState({
        "email": "",
        "password": "",
        "date_of_birth": "",
        "name": ""
    })
    const handleChange = (e) => {
        const { name, value } = e.target
        setData(prevData => ({
            ...prevData, [name]: value
        }))
    }
    const handleRegister = (e) => {
        e.preventDefault()
        actions.register(data.email, data.password, data.is_active, data.date_of_birth, data.name)
    }
    return (
        <div className="container">
            <form onSubmit={handleRegister}>
                <form className="row g-3">
                    <div className="fs-2 d-flex justify-content-center mt-3">Register</div>
                    <div className="col-md-6">
                        <label for="inputEmail4" className="form-label">Email</label>
                        <input type="email" className="form-control" id="inputEmail4" name="email" value={data.email} onChange={handleChange}/>
                    </div>
                    <div className="col-md-6">
                        <label for="inputPassword4" className="form-label">Password</label>
                        <input type="password" className="form-control" id="inputPassword4" name="password" value={data.password} onChange={handleChange}/>
                    </div>
                    <div className="col-12">
                        <label for="inputAddress" className="form-label">Name</label>
                        <input type="text" className="form-control" id="inputAddress" name="name" value={data.name} onChange={handleChange}/>
                    </div>
                    <div className="col-md-6">
                        <label for="inputCity" className="form-label">Date of Birth</label>
                        <input type="text" className="form-control" id="dateOfBirth" name="date_of_birth" value={data.date_of_birth} onChange={handleChange}/>
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">Register</button>
                    </div>
                </form>
            </form>
        </div>
    );
};
