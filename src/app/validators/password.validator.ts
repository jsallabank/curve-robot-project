import { FormControl } from '@angular/forms';

export class PasswordValidator {

  public static strong(control: FormControl) {
    const hasNumber = /\d/.test(control.value);
    const hasUpper = /[A-Z]/.test(control.value);
    const hasLower = /[a-z]/.test(control.value);
    const hasSpecial = /[$&+,:;=\\\\?@#|/'<>.^*()%!-]/.test(control.value);
    const valid = hasNumber && hasUpper && hasLower && hasSpecial;
    if (valid) {
      return { strong: true };
    }
    return null;
  }
}
