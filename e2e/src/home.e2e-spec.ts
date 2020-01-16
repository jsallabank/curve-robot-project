import { HomePage } from './page-objects/home.po';
import { App } from './page-objects/app.po';

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
  it('should display all controls', () => {
    expect(home.getElement("rightKey").isDisplayed()).toEqual(true);
    expect(home.getElement("leftKey").isDisplayed()).toEqual(true);
    expect(home.getElement("placeKey").isDisplayed()).toEqual(true);
    expect(home.getElement("moveKey").isDisplayed()).toEqual(true);
    expect(home.getElement("randomKey").isDisplayed()).toEqual(true);
    expect(home.getElement("reportKey").isDisplayed()).toEqual(true);
  });
  
  it('Should place and report', () => {
    home.clickPlaceKey();
    home.clickReportKey();
    expect(home.getElement("output").substring(0,7)).toEqual("Current");
  });

});
