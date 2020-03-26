import { Component, OnInit } from '@angular/core';
import { IssueService } from '../issue.service';
import { Router, NavigationEnd } from '@angular/router';
import {Issue} from '../issue.model';
import { v4 as uuidv4 } from 'uuid';
import { sha256, sha224 } from 'js-sha256';

@Component({
  selector: 'app-servertype',
  templateUrl: './servertype.component.html',
  styleUrls: ['./servertype.component.css']
})
export class ServertypeComponent implements OnInit {
  hashkey: any[]
   sha:any[]=[]


  issues : Issue[];


  constructor(private issueService: IssueService, private router: Router) { }

  ngOnInit(): void{

    this.fetchIssues();

  }

  fetchIssues() {
    console.log('this is the server component data fetching......')
    this.issueService
    .getIssues()
    .subscribe((data: Issue[]) => {
      this.issues = data;
      console.log('Data requested ... ');
      console.log(this.issues);
      var hash: any[]= this.issues;
      //sha256([])
      
      for (let index = 0; index < hash.length; index++) {
        
       // console.log('hash value is: ', hash);
       let element1 = hash[index];
       
       this.sha[index]  = sha256(element1['_id']+' '+element1['hostpitalId']+' '+element1['symtomps'])
       console.log(this.sha[index])
        // const element = hash[index];
        // console.log(element);

        // this.hashkey = uuidv4(hash['_id'], hash['hospitalId'], hash['symtomps'])
        // console.log('hashkey:::::::', this.hashkey)
        
      }
     console.log(this.sha)

    });
  }


}
