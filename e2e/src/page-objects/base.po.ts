import { browser, by, element, ExpectedConditions } from 'protractor';

export class PageObjectBase {
  private path: string;
  protected tag: string;

  constructor(tag: string, path: string) {
    this.tag = tag;
    this.path = path;
  }

  load() {
    return browser.get(this.path);
  }

  loadWithParams(from: string) {
    console.log(this.path + from);
    return browser.get(this.path + from);
  }

  rootElement() {
    return element(by.css(this.tag));
  }

  waitUntilInvisible() {
    browser.wait(ExpectedConditions.invisibilityOf(this.rootElement()), 3000);
  }

  waitUntilPresent() {
    browser.wait(ExpectedConditions.presenceOf(this.rootElement()), 3000);
  }

  waitUntilNotPresent() {
    browser.wait(
            ExpectedConditions.not(ExpectedConditions.presenceOf(this.rootElement())),
            3000
        );
  }

  waitUntilVisible() {
    browser.wait(ExpectedConditions.visibilityOf(this.rootElement()), 3000);
  }

  getTitle() {
    return element(by.css(`${this.tag} ion-title`)).getText();
  }

  getElement(id: string) {
    return element(by.id(id));
  }

  clickBackButton() {
    const el = element(by.css(`${this.tag} ${'ion-back-button'}`));
    browser.wait(ExpectedConditions.elementToBeClickable(el));
    el.click();
  }

  protected enterInputText(sel: string, text: string) {
    const el = element(by.css(`${this.tag} ${sel}`));
    const inp = el.element(by.css('input'));
    inp.sendKeys(text);
  }

  protected enterInputTextById(id: string, text: string) {
    const el = element(by.id(id));
    const inp = el.element(by.css('input'));
    inp.sendKeys(text);
  }

  protected enterTextareaText(sel: string, text: string) {
    const el = element(by.css(`${this.tag} ${sel}`));
    const inp = el.element(by.css('textarea'));
    inp.sendKeys(text);
  }

  protected clickButtonById(id: string) {
    const el = element(by.id(id));
    browser.wait(ExpectedConditions.elementToBeClickable(el));
    el.click();
  }
}
