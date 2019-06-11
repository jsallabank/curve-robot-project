import { AuthenticationProvider } from './authentication';

describe('AuthenticationProvider', () => {
  let provider: AuthenticationProvider;
  let storageSpy: { get: jasmine.Spy };

  beforeEach(() => {
    storageSpy = jasmine.createSpyObj('storage', ['get']);
    provider = new AuthenticationProvider(storageSpy as any);
  });

  it('should create', () => {
    expect(provider).toBeTruthy();
  });

  it('should get the token', () => {
    provider.token = 'test';
    const token = provider.getToken();
    expect(token).toBe('test');
  });

  it('should return not authenticated', () => {
    const isAuthenticated = provider.isAuthenticated();
    expect(isAuthenticated).toBeFalsy();
  });

  it('should return authenticated', () => {
    provider.token = 'test';
    const isAuthenticated = provider.isAuthenticated();
    expect(isAuthenticated).toBeTruthy();
  });

  it('should set token to the provider', async() => {
    const token = 'ABC123';
    provider.token = token;
    storageSpy.get = jasmine.createSpy().and.returnValue(Promise.resolve(token));
    provider.setToken().then((response) => {
      expect(response).toBeTruthy();
      expect(provider.token).toBe(token);
    });
  });

  it('should not set token to the provider', async() => {
    storageSpy.get = jasmine.createSpy().and.returnValue(Promise.resolve(null));
    provider.setToken().then((response) => {
      expect(response).toBeFalsy();
      expect(provider.token).toBeNull();
    });
  });

});
