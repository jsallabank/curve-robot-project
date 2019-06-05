import { PasswordValidator } from './password.validator';

describe('PasswordValidator', () => {

  beforeEach(() => {
  });

  it('should create', () => {
    expect(PasswordValidator).toBeTruthy();
  });

  it('should validate if password is strong and return invalid', () => {
    const control: any = {};
    control.value = 'bbb';
    const validation = PasswordValidator.strong(control);
    expect(validation).toBeTruthy();
  });

  it('should validate if password is strong and return null', () => {
    const control: any = {};
    control.value = 'Bbb1!';
    const validation = PasswordValidator.strong(control);
    console.log(validation);
    expect(validation).toBeNull();
  });

});
