import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { v4 as uuidv4 } from 'uuid';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class IssueService {

  timestamp: string;
  
uri= "http://localhost:4000";


  constructor(private http : HttpClient,private datePipe: DatePipe) { 
    
    //this.timestamp = datePipe.transform(Date.now(),'yyyy-MM-dd h:mm a');
    //console.log(this.timestamp);

  }

  getIssues() {
    return this.http.get(`${this.uri}/issues`);
  }
  getIssueById(id) {
    return this.http.get(`${this.uri}/issues/${id}`);
  }

  addIssue(formValue) {
    const issue = {
    
      firstname:formValue.firstname,
      lastname:formValue.lastname,
      adharno: formValue.adharno,
      contactno:  formValue.contactno,
      symtomps:formValue.symtomps,
      age: formValue.age,
      sex: formValue.sex,
      status: 'new',
      hospitalId : uuidv4(),
      timestamp: this.datePipe.transform(Date.now(),'yyyy-MM-dd h:mm a')
      
      
    };
    return this.http.post(`${this.uri}/issues/add`, issue);
  }

  updateIssue(formValue) {
    const issue = {
      id: formValue.id,
      status: formValue.status
       
    };
    return this.http.post(`${this.uri}/issues/update/${formValue.id}`, issue);
  }



  deleteIssue(id) {
    return this.http.get(`${this.uri}/issues/delete/${id}`);
  }

}
