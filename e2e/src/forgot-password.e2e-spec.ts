import { ForgotPasswordPage } from './page-objects/forgot-password.po';
import { LoginPage } from './page-objects/login.po';

describe('ForgotPasswordPage', () => {
  let forgot = new ForgotPasswordPage();

  beforeEach(() => {
    forgot = new ForgotPasswordPage();
    forgot.load();
  });

  it('should load', () => {
    expect(forgot.rootElement().isDisplayed()).toEqual(true);
  });

  it('should got to forgot password screen and click reset password', () => {
    forgot.waitUntilVisible();
    forgot.enterEmail('andre@curvetomorrow.com.au');
    forgot.clickResetPassword();
    // Add expectation
  });

  it('should display error messages', () => {
    forgot.waitUntilVisible();
    forgot.clickResetPassword();
    expect(forgot.getElement('errors').isDisplayed()).toEqual(true);
  });

  it('should navigate from login page to forgot page', () => {
    const login = new LoginPage();
    login.load();
    login.clickForgotPassword();
    forgot.waitUntilVisible();
    expect(forgot.rootElement().isDisplayed()).toEqual(true);
  });

  it('should navigate back to login page', () => {
    const login = new LoginPage();
    login.load();
    login.clickRegister();
    login.waitUntilVisible();
    login.waitUntilVisible();
    expect(login.rootElement().isDisplayed()).toEqual(true);
  });
});
