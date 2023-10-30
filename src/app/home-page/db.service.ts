import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  submitButton : any = "Submit"

  students: any=[];

  constructor(public http:HttpClient) {}

  getdataabase(){
    let str = this.http.get("http://localhost:3000/showdata").subscribe(e=>{
      this.students = e
      // console.log(this.students);
    })
  }

  // adddata(){
  //   let add = this.http.get("http://localhost:3000/addData").subscribe(e=>{
  //     this.students = e
  // });
  // }

  deletedata(Name:any){
    let Delete = this.http.delete(`http://localhost:3000/delete/${Name}`).subscribe(e=>{
      this.getdataabase()
      console.log(e);
  });
  }
  
}