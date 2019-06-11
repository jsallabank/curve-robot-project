import { FormProvider } from './form';

describe('FormProvider', () => {
  let provider: FormProvider;

  beforeEach(() => {
    provider = new FormProvider();
  });

  it('should create', () => {
    expect(provider).toBeTruthy();
  });

  it('should return field required', () => {
    provider.checkRequired({ required: true }, 'test');
    expect(provider.errors.length).toBe(1);
  });

  it('should return max length message', () => {
    provider.checkLength({ maxlength: true }, 'test');
    expect(provider.errors.length).toBe(1);
  });

  it('should return min length message', () => {
    provider.checkLength({ minlength: true }, 'test');
    expect(provider.errors.length).toBe(1);
  });

  it('should return max message', () => {
    provider.checkNumber({ max: true }, 'test');
    expect(provider.errors.length).toBe(1);
  });

  it('should return min message', () => {
    provider.checkNumber({ min: true }, 'test');
    expect(provider.errors.length).toBe(1);
  });

  it('should return number message', () => {
    provider.checkNumber({ number: true }, 'test');
    expect(provider.errors.length).toBe(1);
  });

  it('should return date message', () => {
    provider.checkDate({ date: true }, 'test');
    expect(provider.errors.length).toBe(1);
  });

  it('should return pattern message', () => {
    provider.checkPattern({ pattern: true }, 'test');
    expect(provider.errors.length).toBe(1);
  });

  it('should return strength message', () => {
    provider.checkStrength({ strong: true });
    expect(provider.errors.length).toBe(1);
  });

  it('should return email message', () => {
    provider.checkEmail({ email: true }, 'test');
    expect(provider.errors.length).toBe(1);
  });

  it('should return space only message', () => {
    provider.checkOnlySpace({ space: true }, 'test');
    expect(provider.errors.length).toBe(1);
  });

  it('should validate form and return error message', () => {
    const form: any = {};
    form.field = { errors: { space: true } };
    provider.validate(form);
    expect(provider.errors.length).toBe(1);
  });

  it('should validate form and return no message if all valid', () => {
    const form: any = {};
    form.field = { errors: null };
    provider.validate(form);
    expect(provider.errors.length).toBe(0);
  });
});
