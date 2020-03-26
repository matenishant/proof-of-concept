import { Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import{FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeloginComponent } from './homelogin/homelogin.component';
import { AllboxesactivityComponent } from './allboxesactivity/allboxesactivity.component';
import { HospitalComponent } from './hospital/hospital.component';
import { DoctorComponent } from './doctor/doctor.component';
import { ServertypeComponent } from './servertype/servertype.component'; 
import {IssueService} from './issue.service'
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { DatePipe } from '@angular/common';

  

const routes: Routes = [
  {path:'', component:HomeloginComponent},
  {path:'homepage',component:AllboxesactivityComponent},
  {path: 'doctor', component:DoctorComponent}
  
  ];


@NgModule({
  declarations: [
    AppComponent,
    HomeloginComponent,
    AllboxesactivityComponent,
    HospitalComponent,
    DoctorComponent,
    ServertypeComponent,
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [IssueService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
