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
  

});
