import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnroleesPageComponent } from './pages/enrolees-page';
import {
    EnroleeListComponent,
    EnroleeDetailsComponent
} from './components';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'enrolee-portal',
        pathMatch: 'prefix'
    },
    {
        path: 'enrolee-portal',
        component: EnroleesPageComponent,
        children: [
            {
                path: 'list',
                component: EnroleeListComponent,
                children: [
                    {
                        path: 'details',
                        component: EnroleeDetailsComponent
                    }
                ]
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'enrolee-portal'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class EnroleeRoutingModule { }
