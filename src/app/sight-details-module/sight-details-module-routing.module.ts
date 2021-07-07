import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormComponent} from './form/form.component';

const routes: Routes = [
  {path: 'edit/:id', component: FormComponent},
  {path: 'add', component: FormComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SightDetailsModuleRoutingModule { }
