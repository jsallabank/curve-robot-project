import { AlertService } from './alert.service';

describe('AlertService', () => {
  let service: AlertService;
  let alertCtrlSpy: { create: jasmine.Spy };

  beforeEach(() => {
    alertCtrlSpy = jasmine.createSpyObj('alertCtrl', ['create']);
    service = new AlertService(alertCtrlSpy as any);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('should present alert', (done) => {
    const spy = spyOn(service, 'present');
    service.presentAlert('test1', 'test2', 'test3', 'test4').then(() => {
      console.log(alertCtrlSpy);
      expect(spy).toHaveBeenCalled();
      done();
    });
  });

  it('should populate alert', () => {
    const alert = service.populateAlert('test1', 'test2', 'test3', 'test4');
    expect(alert.header).toBe('test1');
    expect(alert.subHeader).toBe('test2');
    expect(alert.message).toBe('test3');
    expect(alert.buttons[0]).toBe('test4');
  });

  it('should present confirmation alert', async() => {
    const spy = spyOn(service, 'present');
    service.presentConfirmation('test1', 'test2', 'test3').then(() => {
      console.log(alertCtrlSpy);
      expect(spy).toHaveBeenCalled();
    });
  });

});
