import { PageObjectBase } from './base.po';

export class HomePage extends PageObjectBase {
  constructor() {
    super('app-home','/home')
  }
  clickRotateLeft() {
    this.clickButtonById('leftKey');
  }
  clickRotateRight() {
    this.clickButtonById('rightKey');
  }
  clickMoveKey() {
    this.clickButtonById('moveKey');
  }
  clickPlaceKey() {
    this.clickButtonById('randomKey');
  }
  clickReportKey() {
    this.clickButtonById('reportKey');
  }
  enterPlaceCommand(text: string) {
    this.enterInputTextById('commandInputID', text);
    this.clickButtonById('executeKey');
  }
}

