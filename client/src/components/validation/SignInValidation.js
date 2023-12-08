const validate = (value) => {
    const errors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    const isEmailValid = (email) => {
        return email.trim() === "" ? "Das Eingabefeld muss ausgefüllt sein" : !emailPattern.test(email) ? "E-Mail beispiel: benutzername@domain.com" : "";
    };

    const isPasswordValid = (password) => {
        return password.trim() === "" ? "Das Eingabefeld muss ausgefüllt sein" : !passwordPattern.test(password) ? "Das Passwort muss mindestens 8 Zeichen, mindestens ein Großbuchstabe, ein Kleinbuchstabe, eine Ziffer und ein Sonderzeichen beinhalten." : "";
    };

    errors.email = isEmailValid(value.email);
    errors.password = isPasswordValid(value.password);

    return errors;
};

export default validate;