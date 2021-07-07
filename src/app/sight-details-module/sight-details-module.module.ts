import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SightDetailsModuleRoutingModule } from './sight-details-module-routing.module';
import {FormComponent} from './form/form.component';
import {SightDetailsComponent} from './sight-details/sight-details.component';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    FormComponent,
    SightDetailsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SightDetailsModuleRoutingModule
  ]
})
export class SightDetailsModuleModule { }
