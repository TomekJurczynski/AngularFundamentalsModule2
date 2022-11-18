import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';
import { CourseComponent } from './course.component'

@NgModule({
  declarations: [],
  imports: [
    SharedModule
  ],
  exports: [
    CourseComponent
  ]
})
export class CourseModule { }
