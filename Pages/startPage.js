const Page = require('./page');

class StartPage extends Page {
    LoginButton = element(by.css('[data-target-popup="authorize-form"]'));
    EnterButton = element(by.css('[value="Войти"]'));
    LoginField = element(by.css('[name="login"]'));
    ErrorElem = element(by.css('[class="b-auth__error"]'));
    PasswordField = element(by.css('[name="password"]'));
    Name = element(by.css('[class="uname"]'));
    ExitButton = element(by.linkText('Выйти'));

}

module.exports = new StartPage();