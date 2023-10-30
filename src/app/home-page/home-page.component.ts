import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DbService } from './db.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  // students = [
  //   {
  //     id : 1,
  //     name : "rudra",
  //     contactNumber : 9004291908,
  //     email : "rudrabelwalkar09@gmail.com",
  //     gender : "male",
  //     city : "mumbai",
  //     DOB : "2005-07-09"
  //   },
  //   {
  //     id : 2,
  //     name : "shubham",
  //     contactNumber : 8452918601,
  //     email : "shubham01@gmail.com",
  //     gender : "male",
  //     city : "vashi",
  //     DOB : "2000-02-15"
  //   },
  // ];
// db: any;


constructor( public http:HttpClient, public db:DbService){
  this.db.getdataabase()
}

submit(){
  this.db.submitButton = "Submit"
}

edit(){
  this.db.submitButton = "Edit"
}



}


