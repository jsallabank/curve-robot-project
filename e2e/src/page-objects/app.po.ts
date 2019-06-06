import { browser } from 'protractor';
import { PageObjectBase } from './base.po';

export class App extends PageObjectBase {
  constructor() {
    super('', '');
  }

  navigateTo() {
    return browser.get('/');
  }
}
