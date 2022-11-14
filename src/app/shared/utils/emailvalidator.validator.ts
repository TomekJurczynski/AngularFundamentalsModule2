import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms'

export function emailValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {

    const email = control.value;

    if (!email) {
      return null;
    }

    const emailpattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    const emailvalid = emailpattern.test(email);
    return !emailvalid ? {appEmailvalidator:true}: null;
  }
}
