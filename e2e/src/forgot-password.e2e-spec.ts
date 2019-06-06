import { ForgotPasswordPage } from './page-objects/forgot-password.po';

describe('HomePage', () => {
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
});
