import React from "react";

const SignIn = () => {
    return (
        <div className="vh-100 d-flex justify-content-center align-items-center styleContainer">
            <div className="w-25 p-4 styleForm">
                <h2>Einloggen</h2>
                <div className="mb-4">
                    <label htmlFor="email"><strong>Email:</strong></label>
                    <input className="form-control" autoComplete="off" type="text" name="email" id="email" />
                </div>
                <div className="mb-4">
                    <label htmlFor="password"><strong>Passwort:</strong></label>
                    <input className="form-control" autoComplete="off" type="text" name="password" id="password" />
                </div>
                <button className="btn btn-success mb-4">Anmelden</button>
                <div className="mb-4">
                    <p>Noch kein Account? <a href="http://localhost:3000/signUp">Registrieren</a></p>
                </div>
            </div >
        </div >
    )
}

export default SignIn;