import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MapComponent} from './map/map.component';
import {ReactiveFormsModule} from '@angular/forms';
import {NgxMapboxGLModule} from 'ngx-mapbox-gl';
import {environment} from '../environments/environment';
import {NavComponent} from './nav/nav.component';
import {HttpClientModule} from '@angular/common/http';
import {SightsListComponent} from './sights-list/sights-list.component';
import {SightsComponent} from './sights/sights.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SightDetailsComponent } from './sight-details-module/sight-details/sight-details.component';
import {SightDetailsModuleModule} from './sight-details-module/sight-details-module.module';



@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    SightsComponent,
    SightsListComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxMapboxGLModule.withConfig({
      accessToken: environment.mapboxToken
    }),
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SightDetailsModuleModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
