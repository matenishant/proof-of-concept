import { Component, OnInit, ViewChild } from '@angular/core';
import { IssueService } from '../issue.service';
import { Router, NavigationEnd } from '@angular/router';
import {Issue} from '../issue.model';
import { FormControl, Validators, FormGroup, NgForm } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';


@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.css']
})
export class HospitalComponent implements OnInit {

  @ViewChild('myForm') formValues; // Added this
   firstname: string;
   lastname: string;
   adharno: string;
   contactno: string;
   symtomps : string;
   age: string;
   sex: string;
   hospitalId: string;
   timestamp: string
   
   

  issues : Issue[];
  displayedColumns = ['firstname','lastname','adharno','contactno','symtomps','age','sex']
   
  constructor(private issueService: IssueService, private router: Router) { 
    //console.log("hello",uuidv4()); 
    
  }

   

  ngOnInit(): void {
    //this.issueService.getIssues().subscribe((issues)=>{
    //  console.log(issues);
   // })
   this.fetchIssues();


  }


  fetchIssues() {
    this.issueService
    .getIssues()
    .subscribe((data: Issue[]) => {
      this.issues = data;
      console.log('Data requested ... ');
      console.log(this.issues);
    });
  }


  editIssue(id) {
    this.router.navigate([`/edit/${id}`]);
  }
  deleteIssue(id) {
    this.issueService.deleteIssue(id).subscribe(() => {
      this.fetchIssues();
    });
  }

  addIssue(formValue) { 
   
    if(typeof(formValue.firstname) == 'undefined' || typeof(formValue.lastname) == 'undefined' 
    || typeof(formValue.adharno) == 'undefined' || typeof(formValue.contactno) == 'undefined' 
    || typeof(formValue.symtomps) == 'undefined' || typeof(formValue.age) == 'undefined'
    || typeof(formValue.sex) == 'undefined' ){
 
      
      alert('Please fill the mandatory details');
    }else{
      this.issueService.addIssue(formValue).subscribe(() => {
        
        
        this.router.navigate(['/homepage']);
        this.formValues.reset();
        location.reload();
      });
    }
    }
     
    
  }


