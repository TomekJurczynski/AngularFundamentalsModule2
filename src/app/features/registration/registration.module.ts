import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';
import { RegistrationComponent } from './registration.component'


@NgModule({
  declarations: [],
  imports: [
    SharedModule
  ],
  exports: [
    RegistrationComponent
  ]
})
export class RegistrationModule { }
