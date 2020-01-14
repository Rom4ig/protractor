const Page = require('./page');

class StartPage extends Page {
    EnterButton = element(by.css('[value="Войти"]'));
    LoginField = element(by.css('[name="login"]'));
    ErrorElem = element(by.css('[class="b-auth__error"]'));
    PasswordField = element(by.css('[name="password"]'));
    ExitButton = element(by.linkText('Выйти'));
    ForgotButton = element(by.linkText('не помню'));
}

module.exports = new StartPage();