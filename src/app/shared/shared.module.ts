import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseComponent } from '../features/course/course.component';
import { CoursesComponent } from '../features/courses/courses.component';
import { LoginComponent } from '../features/login/login.component';
import { RegistrationComponent } from '../features/registration/registration.component';
import { HeaderComponent } from './components/header/header.component';
import { CardbuttonComponent } from './components/cardbutton/cardbutton.component';
import { InfoComponent } from './components/info/info.component';
//import { InfobuttonComponent } from './components/infobutton/infobutton.component';
import { CoursecardComponent } from './components/coursecard/coursecard.component';
import { EmailvalidatorDirective } from './directives/emailvalidator.directive';
import { SearchboxComponent } from './components/searchbox/searchbox.component';


@NgModule({
  declarations: [
    EmailvalidatorDirective,
    SearchboxComponent,
    CourseComponent,
    CoursesComponent,
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    HeaderComponent,
    CardbuttonComponent,
    InfoComponent,
    CoursecardComponent
  ]
})
export class SharedModule { }
