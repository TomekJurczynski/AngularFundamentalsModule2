import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

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
    CoursecardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
