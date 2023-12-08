import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Validation from "./validation/SignUpValidation";

const SignUp = () => {
    const [inputData, setInputData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });
    const [error, setError] = useState({});
    const navigate = useNavigate();

    const registered = async (err) => {
        if (err.firstName === "" && err.lastName === "" && err.email === "" && err.password === "") {
            try {
                await axios.post("http://localhost:3001/signUp", inputData);
                setInputData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    password: "",
                })
                navigate("/");
            } catch (error) {
                console.error("Error saving customer:", error);
            }
        }
    }

    const handleChangeInput = (e) => {
        setInputData(prevData => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const err = Validation(inputData);
        setError(err);
        registered(err);
    }

    return (
        <div className="vh-100 d-flex justify-content-center align-items-center styleContainer">
            <form onSubmit={handleSubmit} className="col-lg-4 col-md-5 col-sm-6 col-9 p-4 styleForm">
                <h2>Neues Konto erstellen</h2>
                <div className="mb-4">
                    <label htmlFor="firstName"><strong>Vorname:</strong></label>
                    <input
                        onChange={handleChangeInput}
                        value={inputData.firstName}
                        className="form-control"
                        autoComplete="off"
                        type="text"
                        name="firstName"
                        id="firstName"
                    />
                    {error.firstName && <span className="text-danger">{error.firstName}</span>}
                </div>
                <div className="mb-4">
                    <label htmlFor="lastName"><strong>Nachname:</strong></label>
                    <input
                        onChange={handleChangeInput}
                        value={inputData.lastName}
                        className="form-control"
                        autoComplete="off"
                        type="text"
                        name="lastName"
                        id="lastName"
                    />
                    {error.lastName && <span className="text-danger">{error.lastName}</span>}
                </div>
                <div className="mb-4">
                    <label htmlFor="email"><strong>Email:</strong></label>
                    <input
                        onChange={handleChangeInput}
                        value={inputData.email}
                        className="form-control"
                        autoComplete="off"
                        type="email"
                        name="email"
                        id="email"
                    />
                    {error.email && <span className="text-danger">{error.email}</span>}
                </div>
                <div className="mb-4">
                    <label htmlFor="password"><strong>Passwort:</strong></label>
                    <input
                        onChange={handleChangeInput}
                        value={inputData.password}
                        className="form-control"
                        autoComplete="off"
                        type="password"
                        name="password"
                        id="password"
                    />
                    {error.password && <span className="text-danger">{error.password}</span>}
                </div>
                <button type="submit" className="btn btn-primary mb-4">Registrieren</button>
                <div className="mb-4">
                    <p>Account bereits erstellt? <a href="http://localhost:3000/">Einloggen</a></p>
                </div>
            </form >
        </div >
    )
}

export default SignUp;