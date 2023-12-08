const validate = (value) => {
    const errors = {};
    const namePattern = /^[A-Z][a-zA-Z]*$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    const isFirstNameValid = (firstName) => {
        return firstName.trim() === "" ? "Das Eingabefeld muss ausgefüllt sein" : !namePattern.test(firstName) ? "Vorname muss mit einem Großbuchstaben anfangen" : "";
    };

    const isLastNameValid = (lastName) => {
        return lastName.trim() === "" ? "Das Eingabefeld muss ausgefüllt sein" : !namePattern.test(lastName) ? "Nachname muss mit einem Großbuchstaben anfangen" : "";
    };

    const isEmailValid = (email) => {
        return email.trim() === "" ? "Das Eingabefeld muss ausgefüllt sein" : !emailPattern.test(email) ? "E-Mail beispiel: benutzername@domain.com" : "";
    };

    const isPasswordValid = (password) => {
        return password.trim() === "" ? "Das Eingabefeld muss ausgefüllt sein" : !passwordPattern.test(password) ? "Das Passwort muss mindestens 8 Zeichen, mindestens ein Großbuchstabe, ein Kleinbuchstabe, eine Ziffer und ein Sonderzeichen beinhalten." : "";
    };

    errors.firstName = isFirstNameValid(value.firstName);
    errors.lastName = isLastNameValid(value.lastName);
    errors.email = isEmailValid(value.email);
    errors.password = isPasswordValid(value.password);

    return errors;
};

export default validate;