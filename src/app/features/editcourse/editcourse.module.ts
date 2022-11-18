import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';
import { EditcourseComponent } from './editcourse.component'

@NgModule({
  declarations: [],
  imports: [
    SharedModule
  ],
  exports: [
    EditcourseComponent
  ]
})
export class EditcourseModule { }
