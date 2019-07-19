import { FormControl } from '@angular/forms';

export class StringValidator {

  public static empty(control: FormControl) {
    if (control.value != null && control.value !== '') {
      console.log(control);
      if (control.value.trim().length === 0) {
        return { empty: true };
      }
      return null;
    }
    return null;
  }
}
