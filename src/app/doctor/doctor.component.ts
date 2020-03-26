import { Issue } from './../issue.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IssueService } from '../issue.service';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
  @ViewChild('doctorForm') formValues; // Added this
  status: string;
  id: string;  





  issues : Issue[];
   data : Issue[];
  mySubscription: any;
  http: any;
   displayUserInfo:Boolean = false;

  constructor(private issueService: IssueService, private router: Router) { }
  //   this.router.routeReuseStrategy.shouldReuseRoute = function () {
  //     return false;
  //   };
    
  //   this.mySubscription = this.router.events.subscribe((event) => {
  //     if (event instanceof NavigationEnd) {
  //       // Trick the Router into believing it's last link wasn't previously loaded
  //       this.router.navigated = false;
  //     }
  //   });
  // }
  // ngOnDestroy() {
  //   if (this.mySubscription) {
  //     this.mySubscription.unsubscribe();
  //   }
  // }

  ngOnInit(): void {
    this.fetchIssues();
  }


  fetchIssues() {
    this.issueService
    .getIssues()
    .subscribe((data: Issue[]) => {
      this.issues = data;
      console.log('Data requested on doctor component ... ', data);
      
    });
  }

 getIssue(id){
   this.issueService.getIssueById(id).subscribe((data: Issue[])=>{
    this.displayUserInfo = true;
    this.data = data;
    console.log(this.displayUserInfo);
     console.log("doctor get by id", this.data);
     console.log(this.data['_id'])
   })
  
 }

 updateStatus(formValue) { 
   
    
      this.issueService.updateIssue(formValue.id).subscribe((data: Issue[]) => {
        
        
        this.router.navigate(['/homepage']);
        this.formValues.reset();
        location.reload();
      });
    }
    }




