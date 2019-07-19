import { PageObjectBase } from './base.po';

export class ForgotPasswordPage extends PageObjectBase {
  constructor() {
    super('app-forgot-password', '/forgot-password');
  }

  enterEmail(text: string) {
    this.enterInputTextById('email', text);
  }

  clickResetPassword() {
    this.clickButtonById('resetPasswordButton');
  }
}
