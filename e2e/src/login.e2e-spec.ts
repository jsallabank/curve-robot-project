import { LoginPage } from './page-objects/login.po';

describe('HomePage', () => {
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

});
