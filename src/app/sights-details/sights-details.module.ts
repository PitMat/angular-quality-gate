import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SightsDetailsRoutingModule } from './sights-details-routing.module';
import { SightDetailsComponent } from './sight-details/sight-details.component';


@NgModule({
  declarations: [SightDetailsComponent],
  imports: [
    CommonModule,
    SightsDetailsRoutingModule
  ]
})
export class SightsDetailsModule { }
