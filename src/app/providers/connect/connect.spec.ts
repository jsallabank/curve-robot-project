import { ConnectProvider } from './connect';
import { of } from 'rxjs';
import { async } from '@angular/core/testing';

describe('ConnectProvider', () => {
  let provider: ConnectProvider;
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
    provider = new ConnectProvider(httpSpy as any, authSpy as any);
  });

  it('should create', () => {
    expect(provider).toBeTruthy();
  });

  it('should login user and return request', async(() => {
    httpSpy.post = jasmine.createSpy().and.returnValue(of('abcd'));
    provider.getToken('user', 'password').subscribe(
            (request) => {
              expect(request).toBe('abcd');
            }
        );
  }));

  it('should set the header with the token', () => {
    provider.auth.token = 'THIS_IS_A_TOKEN';
    provider.setAuthenticatedHeader();
    expect(provider.headers.get('Content-Type')).toBe('application/json');
    expect(provider.headers.get('Accept')).toBe('application/json');
    expect(provider.headers.get('Authorization')).toBe(`Bearer ${provider.auth.token}`);
  });

  it('should list from api', async(() => {
    httpSpy.get = jasmine.createSpy().and.returnValue(of('abcd'));
    provider.list('endpoint').subscribe(
            (request) => {
              expect(request).toBe('abcd');
            }
        );
  }));

  it('should get from api', async(() => {
    httpSpy.get = jasmine.createSpy().and.returnValue(of('abcd'));
    provider.get('endpoint', 'id').subscribe(
            (request) => {
              expect(request).toBe('abcd');
            }
        );
  }));

  it('should get custom from api', async(() => {
    httpSpy.get = jasmine.createSpy().and.returnValue(of('abcd'));
    provider.getCustom('endpoint').subscribe(
            (request) => {
              expect(request).toBe('abcd');
            }
        );
  }));

  it('should post data', async(() => {
    httpSpy.post = jasmine.createSpy().and.returnValue(of('abcd'));
    provider.create('endpoint', 'data').subscribe(
            (request) => {
              expect(request).toBe('abcd');
            }
        );
  }));

  it('should update data', async(() => {
    httpSpy.put = jasmine.createSpy().and.returnValue(of('abcd'));
    provider.update('endpoint', 'id', 'data').subscribe(
            (request) => {
              expect(request).toBe('abcd');
            }
        );
  }));

  it('should delete data', async(() => {
    httpSpy.delete = jasmine.createSpy().and.returnValue(of('abcd'));
    provider.delete('endpoint', 'id').subscribe(
            (request) => {
              expect(request).toBe('abcd');
            }
        );
  }));
});
