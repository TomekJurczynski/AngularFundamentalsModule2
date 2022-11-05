import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursecardComponent } from './coursecard.component';
import { SharedModule } from '../../shared.module';

@NgModule({
  declarations: [
    SharedModule
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CoursecardComponent
  ]
})
export class CoursecardModule { }
