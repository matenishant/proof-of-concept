import { AllboxesactivityComponent } from './allboxesactivity/allboxesactivity.component';
import { HomeloginComponent } from './homelogin/homelogin.component';

import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IssueService} from './issue.service';
import { DoctorComponent } from './doctor/doctor.component';


const routes: Routes = [
{path:'', component:HomeloginComponent},
{path:'homepage',component:AllboxesactivityComponent},
{path: 'doctor', component:DoctorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})





export class AppRoutingModule { }
