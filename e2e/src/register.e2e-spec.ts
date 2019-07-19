import { RegisterPage } from './page-objects/register.po';
import { LoginPage } from './page-objects/login.po';

describe('RegisterPage', () => {
  let register = new RegisterPage();

  beforeEach(() => {
    register = new RegisterPage();
    register.load();
  });

  it('should load', () => {
    expect(register.rootElement().isDisplayed()).toEqual(true);
  });

  it('should register', () => {
    register.waitUntilVisible();
    register.enterFirstName('Andre');
    register.enterLastName('Rocha');
    register.enterEmail('andre@curvetomorrow.com.au');
    register.enterPassword('123456');
    register.enterConfirmPassword('123456');
    // Add expectation
  });

  it('should display error messages', () => {
    register.waitUntilVisible();
    register.clickRegister();
    expect(register.getElement('errors').isDisplayed()).toEqual(true);
  });

  it('should navigate from login page to register page', () => {
    const login = new LoginPage();
    login.load();
    login.clickRegister();
    register.waitUntilVisible();
    expect(register.rootElement().isDisplayed()).toEqual(true);
  });

  it('should navigate back to login page', () => {
    const login = new LoginPage();
    login.load();
    login.clickRegister();
    login.waitUntilVisible();
    register.clickBackButton();
    login.waitUntilVisible();
    expect(login.rootElement().isDisplayed()).toEqual(true);
  });
});
