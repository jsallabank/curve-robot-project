import { PageObjectBase } from './base.po';

export class LoginPage extends PageObjectBase {
  constructor() {
    super('app-login', '/login');
  }

  enterEmail(text: string) {
    this.enterInputTextById('email', text);
  }

  enterPassword(text: string) {
    this.enterInputTextById('password', text);
  }

  clickLogin() {
    this.clickButtonById('loginButton');
  }

  clickRegister() {
    this.clickButtonById('registerButton');
  }

  clickForgotPassword() {
    this.clickButtonById('forgotPasswordButton');
  }
}
