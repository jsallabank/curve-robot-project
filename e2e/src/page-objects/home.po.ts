import { PageObjectBase } from './base.po';

export class HomePage extends PageObjectBase {
  constructor() {
    super('app-home', '/home');
  }

  clickNextPage() {
    this.clickButtonById('next-page-button');
  }
}
