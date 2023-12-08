import React, { useEffect, useState } from "react";
import axios from "axios";
import Validation from "./validation/SignInValidation";

const SignIn = () => {
    const [registeredData, setRegisteredData] = useState([]);
    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    });
    const [error, setError] = useState({});
    const [showIncorrectLogin, setShowIncorretLogin] = useState(false);

    useEffect(() => {
        const fetchRegisteredData = async () => {
            try {
                const response = await axios.get("http://localhost:3001/");
                setRegisteredData(response.data);
            } catch (error) {
                console.error("Error fetching registered data:", error);
            }
        };

        fetchRegisteredData();
    }, []);

    const handleChangeInput = (e) => {
        setLoginData(prevData => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
    };

    const login = (err) => {
        if (err.email === "" && err.password === "") {
            const foundData = registeredData.some(data => data.email === loginData.email && data.password === loginData.password);
            if (foundData) {
                setLoginData({
                    email: "",
                    password: "",
                })
                return alert("Login erfolgreich");
            } else {
                showIncorrectLoginMessage();
            }
        }
    }

    const showIncorrectLoginMessage = () => {
        setShowIncorretLogin(true);
        setTimeout(() => {
            setShowIncorretLogin(false);
        }, 4000);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const err = Validation(loginData);
        setError(err);
        login(err);
    }


    return (
        <div className="vh-100 d-flex justify-content-center align-items-center styleContainer">
            <form onSubmit={handleSubmit} className="col-lg-4 col-md-5 col-sm-6 col-9 p-4 styleForm">
                <h2>Einloggen</h2>
                {
                    showIncorrectLogin && <div className="alert alert-danger">Die Anmeldedaten sind nicht gültig. Bitte überprüfe deine E-Mail-Adresse und dein Passwort und versuche es erneut.</div>
                }
                <div className="mb-4">
                    <label htmlFor="email"><strong>Email:</strong></label>
                    <input
                        onChange={handleChangeInput}
                        value={loginData.email}
                        required
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
                        value={loginData.password}
                        required
                        className="form-control"
                        autoComplete="off"
                        type="password"
                        name="password"
                        id="password"
                    />
                    {error.password && <span className="text-danger">{error.password}</span>}
                </div>
                <button type="submit" className="btn btn-success mb-4">Anmelden</button>
                <div className="mb-4">
                    <p>Noch kein Account? <a href="http://localhost:3000/signUp">Registrieren</a></p>
                </div>
            </form >
        </div >
    )
}

export default SignIn;