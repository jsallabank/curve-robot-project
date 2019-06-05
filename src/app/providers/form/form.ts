import { Injectable } from '@angular/core';

@Injectable()
export class FormProvider {

  public errors: any = [];

  constructor() {
    console.log('Hello FormProvider Provider');
  }

  public validate(controls) {
    Object.keys(controls).forEach((key) => {
      const prettyKey = key.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/_/g, ' ').replace(/(?:^|\s)\S/g, l => l.toUpperCase());
      if (controls[key].errors != null) {
        this.checkRequired(controls[key].errors, prettyKey);
        this.checkLength(controls[key].errors, prettyKey);
        this.checkNumber(controls[key].errors, prettyKey);
        this.checkDate(controls[key].errors, prettyKey);
        this.checkPattern(controls[key].errors, prettyKey);
        this.checkStrength(controls[key].errors);
        this.checkOnlySpace(controls[key].errors, prettyKey);
      }
    });
    return this.errors;
  }

  public checkRequired(errors: any, prettyKey: string) {
    console.log(errors);
    if (errors.required) { this.errors.push(`Please fill out the ${prettyKey}.`); }
  }

  public checkLength(errors: any, prettyKey: string) {
    if (errors.maxlength) { this.errors.push(`${prettyKey} cannot have more than ${errors.maxlength.requiredLength} characters.`); }
    if (errors.minlength) { this.errors.push(`${prettyKey} needs at least ${errors.minlength.requiredLength} characters.`); }
  }

  public checkNumber(errors: any, prettyKey: string) {
    if (errors.max) { this.errors.push(`Please enter a(n) ${prettyKey} smaller or equal to ${errors.max.max}`); }
    if (errors.min) { this.errors.push(`Please enter a(n) ${prettyKey} greater or equal to ${errors.min.min}`); }
    if (errors.number) { this.errors.push(`Please fill out the ${prettyKey} with a valid number.`); }
  }

  public checkDate(errors: any, prettyKey: string) {
    if (errors.date) { this.errors.push(`Please fill out the ${prettyKey} with a valid date.`); }
  }

  public checkPattern(errors: any, prettyKey: string) {
    if (errors.pattern) { this.errors.push(`Please fill out the ${prettyKey} with a valid date.`); }
  }

  public checkStrength(errors: any) {
    if (errors.strong) { this.errors.push(`Password is not strong enough. Please include capital and lower case letters, numbers and special characters.`); }
  }

  public checkOnlySpace(errors: any, prettyKey: string) {
    if (errors.space) { this.errors.push(`Please fill out the ${prettyKey} with a valid text.`); }
  }

}
