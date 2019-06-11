import { AlertProvider } from './alert';

describe('AlertProvider', () => {
  let provider: AlertProvider;
  let alertCtrlSpy: { create: jasmine.Spy };

  beforeEach(() => {
    alertCtrlSpy = jasmine.createSpyObj('alertCtrl', ['create']);
    provider = new AlertProvider(alertCtrlSpy as any);
  });

  it('should create', () => {
    expect(provider).toBeTruthy();
  });

  it('should present alert', (done) => {
    const spy = spyOn(provider, 'present');
    provider.presentAlert('test1', 'test2', 'test3', 'test4').then(() => {
      console.log(alertCtrlSpy);
      expect(spy).toHaveBeenCalled();
      done();
    });
  });

  it('should populate alert', () => {
    const alert = provider.populateAlert('test1', 'test2', 'test3', 'test4');
    expect(alert.header).toBe('test1');
    expect(alert.subHeader).toBe('test2');
    expect(alert.message).toBe('test3');
    expect(alert.buttons[0]).toBe('test4');
  });

  it('should present confirmation alert', async() => {
    const spy = spyOn(provider, 'present');
    provider.presentConfirmation('test1', 'test2', 'test3').then(() => {
      console.log(alertCtrlSpy);
      expect(spy).toHaveBeenCalled();
    });
  });

});
