import { ConnectService } from './connect.service';
import { of } from 'rxjs';
import { async } from '@angular/core/testing';

describe('ConnectService', () => {
  let service: ConnectService;
  let httpSpy: {
    get: jasmine.Spy,
    post: jasmine.Spy,
    put: jasmine.Spy,
    delete: jasmine.Spy,
  };
  let authSpy: {};

  beforeEach(() => {
    authSpy = jasmine.createSpyObj('auth', ['token']);
    httpSpy = jasmine.createSpyObj('http', ['get', 'post', 'put', 'delete']);
    service = new ConnectService(httpSpy as any, authSpy as any);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('should login user and return request', async(() => {
    httpSpy.post = jasmine.createSpy().and.returnValue(of('abcd'));
    service.getToken('user', 'password').subscribe(
            (request) => {
              expect(request).toBe('abcd');
            }
        );
  }));

  it('should set the header with the token', () => {
    service.auth.token = 'THIS_IS_A_TOKEN';
    service.setAuthenticatedHeader();
    expect(service.headers.get('Content-Type')).toBe('application/json');
    expect(service.headers.get('Accept')).toBe('application/json');
    expect(service.headers.get('Authorization')).toBe(`Bearer ${service.auth.token}`);
  });

  it('should list from api', async(() => {
    httpSpy.get = jasmine.createSpy().and.returnValue(of('abcd'));
    service.list('endpoint').subscribe(
            (request) => {
              expect(request).toBe('abcd');
            }
        );
  }));

  it('should get from api', async(() => {
    httpSpy.get = jasmine.createSpy().and.returnValue(of('abcd'));
    service.get('endpoint', 'id').subscribe(
            (request) => {
              expect(request).toBe('abcd');
            }
        );
  }));

  it('should get custom from api', async(() => {
    httpSpy.get = jasmine.createSpy().and.returnValue(of('abcd'));
    service.getCustom('endpoint').subscribe(
            (request) => {
              expect(request).toBe('abcd');
            }
        );
  }));

  it('should post data', async(() => {
    httpSpy.post = jasmine.createSpy().and.returnValue(of('abcd'));
    service.create('endpoint', 'data').subscribe(
            (request) => {
              expect(request).toBe('abcd');
            }
        );
  }));

  it('should update data', async(() => {
    httpSpy.put = jasmine.createSpy().and.returnValue(of('abcd'));
    service.update('endpoint', 'id', 'data').subscribe(
            (request) => {
              expect(request).toBe('abcd');
            }
        );
  }));

  it('should delete data', async(() => {
    httpSpy.delete = jasmine.createSpy().and.returnValue(of('abcd'));
    service.delete('endpoint', 'id').subscribe(
            (request) => {
              expect(request).toBe('abcd');
            }
        );
  }));
});
