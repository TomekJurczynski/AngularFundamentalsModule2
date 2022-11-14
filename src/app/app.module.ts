import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CourseComponent } from './features/course/course.component';
import { CoursesComponent } from './features/courses/courses.component';
import { LoginComponent } from './features/login/login.component';
import { RegistrationComponent } from './features/registration/registration.component';
import { HeaderComponent } from './shared/components/header/header.component'
import { CardbuttonComponent } from './shared/components/cardbutton/cardbutton.component';
import { InfoComponent } from './shared/components/info/info.component';
import { InfobuttonComponent } from './shared/components/infobutton/infobutton.component';
import { CoursecardComponent } from './shared/components/coursecard/coursecard.component';
import { SearchboxComponent } from './shared/components/searchbox/searchbox.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EditcourseComponent } from './features/editcourse/editcourse.component'
import { EmailvalidatorDirective } from './shared/directives/emailvalidator.directive'

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    CoursesComponent,
    LoginComponent,
    RegistrationComponent,
    HeaderComponent,
    CardbuttonComponent,
    InfoComponent,
    InfobuttonComponent,
    CoursecardComponent,
    EditcourseComponent,
    EmailvalidatorDirective,
    SearchboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
