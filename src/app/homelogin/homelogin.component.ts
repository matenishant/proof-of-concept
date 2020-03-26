import { Component, OnInit } from '@angular/core';

import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {Router}  from '@angular/router';
@Component({
  
  selector: 'app-homelogin',
  templateUrl: './homelogin.component.html',
  styleUrls: ['./homelogin.component.css']
})
export class HomeloginComponent implements OnInit {

  constructor(private router: Router) {
    const username: string = 'admin';
    const password: string = 'admin';
     
  }
  ngOnInit(): void {
     

  }
  loginUser($event:any, username: any,password: any){
console.log($event);
console.log(username,password)
if(username=='admin' && password=='admin'){
  this.router.navigate(["/homepage"]);
}else{
   alert('Invalid credentials, Please try again !!')
}

  }

}
