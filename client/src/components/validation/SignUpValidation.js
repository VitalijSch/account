const Validation = (value) => {
    let error = {};
    const name_pattern = /^[A-Z][a-zA-Z]*$/;
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const password_pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (value.firstName.trim() === "") {
        error.firstName = "Das Eingabefeld muss ausgefüllt sein";
    } else if (!name_pattern.test(value.firstName)) {
        error.firstName = "Vorname muss mit einem Großbuchstaben anfangen";
    } else {
        error.firstName = ""
    }

    if (value.lastName.trim() === "") {
        error.lastName = "Das Eingabefeld muss ausgefüllt sein";
    } else if (!name_pattern.test(value.lastName)) {
        error.lastName = "Nachname muss mit einem Großbuchstaben anfangen"
    } else {
        error.lastName = "";
    }

    console.log(value.email)
    if (value.email.trim() === "") {
        error.email = "Das Eingabefeld muss ausgefüllt sein";
    } else if (!email_pattern.test(value.email)) {
        error.email = "E-Mail beispiel: benutzername@domain.com";
    } else {
        error.email = "";
    }

    if (value.password.trim() === "") {
        error.password = "Das Eingabefeld muss ausgefüllt sein";
    } else if (!password_pattern.test(value.password)) {
        error.password = "Das Passwort muss mindestens 8 Zeichen, mindestens ein Großbuchstabe, ein Kleinbuchstabe, eine Ziffer und ein Sonderzeichen beinhalten.";
    } else {
        error.password = "";
    }

    return error;
}

export default Validation;