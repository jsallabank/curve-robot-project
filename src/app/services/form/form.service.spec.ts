import { FormService } from './form.service';

describe('FormService', () => {
  let service: FormService;

  beforeEach(() => {
    service = new FormService();
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('should return field required', () => {
    service.checkRequired({ required: true }, 'test');
    expect(service.errors.length).toBe(1);
  });

  it('should return max length message', () => {
    service.checkLength({ maxlength: true }, 'test');
    expect(service.errors.length).toBe(1);
  });

  it('should return min length message', () => {
    service.checkLength({ minlength: true }, 'test');
    expect(service.errors.length).toBe(1);
  });

  it('should return max message', () => {
    service.checkNumber({ max: true }, 'test');
    expect(service.errors.length).toBe(1);
  });

  it('should return min message', () => {
    service.checkNumber({ min: true }, 'test');
    expect(service.errors.length).toBe(1);
  });

  it('should return number message', () => {
    service.checkNumber({ number: true }, 'test');
    expect(service.errors.length).toBe(1);
  });

  it('should return date message', () => {
    service.checkDate({ date: true }, 'test');
    expect(service.errors.length).toBe(1);
  });

  it('should return pattern message', () => {
    service.checkPattern({ pattern: true }, 'test');
    expect(service.errors.length).toBe(1);
  });

  it('should return strength message', () => {
    service.checkStrength({ strong: true });
    expect(service.errors.length).toBe(1);
  });

  it('should return email message', () => {
    service.checkEmail({ email: true }, 'test');
    expect(service.errors.length).toBe(1);
  });

  it('should return space only message', () => {
    service.checkOnlySpace({ space: true }, 'test');
    expect(service.errors.length).toBe(1);
  });

  it('should validate form and return error message', () => {
    const form: any = {};
    form.field = { errors: { space: true } };
    service.validate(form);
    expect(service.errors.length).toBe(1);
  });

  it('should validate form and return no message if all valid', () => {
    const form: any = {};
    form.field = { errors: null };
    service.validate(form);
    expect(service.errors.length).toBe(0);
  });
});
