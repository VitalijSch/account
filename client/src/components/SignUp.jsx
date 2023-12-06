import React from "react";

const SignUp = () => {
    return (
        <div className="vh-100 d-flex justify-content-center align-items-center styleContainer">
            <div className="w-25 p-4 styleForm">
                <h2>Neues Konto erstellen</h2>
                <div className="mb-4">
                    <label htmlFor="firstName"><strong>Vorname:</strong></label>
                    <input className="form-control" autoComplete="off" type="text" name="firstName" id="firstName" />
                </div>
                <div className="mb-4">
                    <label htmlFor="lastName"><strong>Nachname:</strong></label>
                    <input className="form-control" autoComplete="off" type="text" name="lastName" id="lastName" />
                </div>
                <div className="mb-4">
                    <label htmlFor="email"><strong>Email:</strong></label>
                    <input className="form-control" autoComplete="off" type="text" name="email" id="email" />
                </div>
                <div className="mb-4">
                    <label htmlFor="password"><strong>Passwort:</strong></label>
                    <input className="form-control" autoComplete="off" type="text" name="password" id="password" />
                </div>
                <button className="btn btn-primary mb-4">Registrieren</button>
                <div className="mb-4">
                    <p>Account bereits erstellt? <a href="http://localhost:3000/">Einloggen</a></p>
                </div>
            </div >
        </div >
    )
}

export default SignUp;