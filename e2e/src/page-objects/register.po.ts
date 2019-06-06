import { PageObjectBase } from './base.po';

export class RegisterPage extends PageObjectBase {
  constructor() {
    super('app-register', '/register');
  }

  enterFirstName(text: string) {
    this.enterInputTextById('firstName', text);
  }

  enterLastName(text: string) {
    this.enterInputTextById('lastName', text);
  }

  enterEmail(text: string) {
    this.enterInputTextById('email', text);
  }

  enterPassword(text: string) {
    this.enterInputTextById('password', text);
  }

  enterConfirmPassword(text: string) {
    this.enterInputTextById('confirmPassword', text);
  }

  clickRegister() {
    this.clickButtonById('registerButton');
  }
}
