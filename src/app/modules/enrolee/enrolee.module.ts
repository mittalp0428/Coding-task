import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { EnroleeRoutingModule } from './enrolee-routing.module';
import { EnroleesPageComponent } from './pages/enrolees-page';
import {
    EnroleeListComponent,
    EnroleeDetailsComponent
} from './components';

@NgModule({
    declarations: [
        EnroleeListComponent,
        EnroleeDetailsComponent,
        EnroleesPageComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        EnroleeRoutingModule
    ]
})
export class EnroleeModule { }
