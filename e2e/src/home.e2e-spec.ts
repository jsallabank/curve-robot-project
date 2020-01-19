import { HomePage } from './page-objects/home.po';
import { App } from './page-objects/app.po';
import { browser, by, element, ExpectedConditions } from 'protractor';

describe('HomePage', () => {
  let home = new HomePage();
  const app = new App();
  

  beforeEach(() => {
    app.navigateTo();
    home = new HomePage();
  });

  it('should load', () => {
    expect(home.rootElement().isDisplayed()).toEqual(true);
  });
  it('should display all controls, board and not display car', () => {
    expect(home.getElement("rightKey").isDisplayed()).toEqual(true);
    expect(home.getElement("leftKey").isDisplayed()).toEqual(true);
    expect(home.getElement("moveKey").isDisplayed()).toEqual(true);
    expect(home.getElement("randomKey").isDisplayed()).toEqual(true);
    expect(home.getElement("reportKey").isDisplayed()).toEqual(true);
    expect(home.getElement("boardID").isDisplayed()).toEqual(true);

    let tempElement = element(by.id("imageID"));
    expect(tempElement.isPresent()).toBeFalsy();
    
  });
  
  it('Should place', () => {
    browser.sleep(2000);
    home.waitUntilVisible();
    home.clickPlaceKey();
    browser.sleep(2000);
    expect(home.getElement("imageID").isDisplayed()).toEqual(true);

  });

  it('Should report', () => {
    browser.sleep(2000);
    home.waitUntilVisible();
    home.clickPlaceKey();
    browser.sleep(2000);
    home.clickReportKey();
    browser.sleep(2000);
    expect(home.getElement("output").isDisplayed()).toEqual(true);
  });

  it('should place with commands', () => {
    browser.sleep(2000);
    home.waitUntilVisible();
    home.enterPlaceCommand("PLACE 2,2,NORTH");
    browser.sleep(2000);
    expect(home.getElement("imageID").isDisplayed()).toEqual(true);
  });


});
