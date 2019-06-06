import { StringValidator } from './string.validator';

describe('EmptyStringValidator', () => {

  beforeEach(() => {
  });

  it('should create', () => {
    expect(StringValidator).toBeTruthy();
  });

  it('should validate if string is filled only with spaces and return invalid', () => {
    const control: any = {};
    control.value = '    ';
    const validation = StringValidator.empty(control);
    expect(validation.empty).toBeTruthy();
  });

  it('should validate if string has text and return null', () => {
    const control: any = {};
    control.value = 'a a';
    const validation = StringValidator.empty(control);
    console.log(validation);
    expect(validation).toBeNull();
  });

  it('should check if text hasnt been entered and return null', () => {
    const control: any = {};
    control.value = '';
    const validation = StringValidator.empty(control);
    console.log(validation);
    expect(validation).toBeNull();
  });

});
