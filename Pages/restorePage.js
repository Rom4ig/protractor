const Page = require('./page');

class RestorePage extends Page {
    RestoreField = element(by.css('[id="field-email-login"]'));
    CheckButton = element(by.css('[id="recovery-check"]'));
    ErrorMessage = element(by.css('[id="field-email-login-notice"]'));
    EmailRecoveryButton = element(by.css('[id="email_recovery"]'));
    ReservEmailField = element(by.css('[id="field-reservemail"]'));
    ErrorFormatMail = element(by.css('[id="field-reservemail-notice"]'));
    EmailReservButton = element(by.css('[id="field-reservemail-button"]'));
    
    
}

module.exports = new RestorePage();