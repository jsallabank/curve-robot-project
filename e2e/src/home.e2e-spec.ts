import { HomePage } from './page-objects/home.po';
import { LoginPage } from './page-objects/login.po';
import { App } from './page-objects/app.po';

describe('HomePage', () => {
  let home = new HomePage();
  const app = new App();
  const login = new LoginPage();

  beforeEach(() => {
    app.navigateTo();
    home = new HomePage();
  });

  it('should load', () => {
    expect(home.rootElement().isDisplayed()).toEqual(true);
  });

  it('should go to Login Page', () => {
    home.clickNextPage();
    login.waitUntilVisible();
    expect(login.rootElement().isDisplayed()).toEqual(true);
  });
});
