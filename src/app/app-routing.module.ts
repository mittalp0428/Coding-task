import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnroleeModule } from './modules/enrolee/enrolee.module';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
