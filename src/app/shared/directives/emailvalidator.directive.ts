import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { Validator, NG_VALIDATORS, AbstractControl, ValidationErrors } from '@angular/forms';
import { emailValidator } from '../utils/emailvalidator.validator'

@Directive({
  selector: '[appEmailvalidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: EmailvalidatorDirective,
    multi: true }]
})
export class EmailvalidatorDirective implements Validator {

  validate(control: AbstractControl): ValidationErrors | null {
    return emailValidator()(control);
  }

}
