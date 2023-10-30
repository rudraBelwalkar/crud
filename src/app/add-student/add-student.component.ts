import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { DbService } from '../home-page/db.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {

  constructor( public fb:FormBuilder, public http:HttpClient, public db:DbService){}
  
  profileForm = new FormGroup({
    firstName: new FormControl('',[Validators.required, Validators.minLength(10)]),
    id: new FormControl(''),
    contact: new FormControl(''),
    email: new FormControl(''),
    Gender: new FormControl(''),
    courseNo: new FormControl(''),
    courseName: new FormControl(''),
    city: new FormControl(''),
    dob: new FormControl(''),

  });

  information(){
    let student = {
      "id": this.profileForm.value.id,
      "name": this.profileForm.value.firstName,
      "contact": this.profileForm.value.contact,
      "email": this.profileForm.value.email,
      "gender": this.profileForm.value.Gender,
      "courseNo": this.profileForm.value.courseNo,
      "courseName": this.profileForm.value.courseName,
      "city": this.profileForm.value.city,
      "dob": this.profileForm.value.dob,
    };
    let data = this.http.post('http://localhost:3000/addData',student).subscribe(res=>{
      console.log(data);
      console.log(res);
      
    })
    console.log(this.profileForm.value)
  }
}