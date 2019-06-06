import { LoginPage } from './page-objects/login.po';

describe('LoginPage', () => {
  let login = new LoginPage();

  beforeEach(() => {
    login = new LoginPage();
    login.load();
  });

  it('should load', () => {
    expect(login.rootElement().isDisplayed()).toEqual(true);
  });

  it('should login', () => {
    login.waitUntilVisible();
    login.enterEmail('andre@curvetomorrow.com.au');
    login.enterPassword('123456');
    // Add expectation
  });

  it('should display error messages', () => {
    login.waitUntilVisible();
    login.clickLogin();
    expect(login.getElement('errors').isDisplayed()).toEqual(true);
  });
});
