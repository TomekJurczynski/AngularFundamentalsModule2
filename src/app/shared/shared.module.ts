import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header/header.component';
import { CardbuttonComponent } from './components/cardbutton/cardbutton.component';
import { InfoComponent } from './components/info/info.component';
import { CoursecardComponent } from './components/coursecard/coursecard.component';
import { EmailvalidatorDirective } from './directives/emailvalidator.directive';
import { SearchboxComponent } from './components/searchbox/searchbox.component';

const COMPONENTS = [
  EmailvalidatorDirective,
  CardbuttonComponent,
  CoursecardComponent,
  HeaderComponent,
  InfoComponent,
  SearchboxComponent
];

@NgModule({
  declarations: COMPONENTS,
  imports: [],
  exports: [
    CommonModule,
    ...COMPONENTS
  ]
})
export class SharedModule { }
