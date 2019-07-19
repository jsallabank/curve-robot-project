import { AuthenticationService } from './authentication.service';

describe('AuthenticationService', () => {
  let service: AuthenticationService;
  let storageSpy: { get: jasmine.Spy };

  beforeEach(() => {
    storageSpy = jasmine.createSpyObj('storage', ['get']);
    service = new AuthenticationService(storageSpy as any);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('should get the token', () => {
    service.token = 'test';
    const token = service.getToken();
    expect(token).toBe('test');
  });

  it('should return not authenticated', () => {
    const isAuthenticated = service.isAuthenticated();
    expect(isAuthenticated).toBeFalsy();
  });

  it('should return authenticated', () => {
    service.token = 'test';
    const isAuthenticated = service.isAuthenticated();
    expect(isAuthenticated).toBeTruthy();
  });

  it('should set token to the provider', async() => {
    const token = 'ABC123';
    service.token = token;
    storageSpy.get = jasmine.createSpy().and.returnValue(Promise.resolve(token));
    service.setToken().then((response) => {
      expect(response).toBeTruthy();
      expect(service.token).toBe(token);
    });
  });

  it('should not set token to the provider', async() => {
    storageSpy.get = jasmine.createSpy().and.returnValue(Promise.resolve(null));
    service.setToken().then((response) => {
      expect(response).toBeFalsy();
      expect(service.token).toBeNull();
    });
  });

});
