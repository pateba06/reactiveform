import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
@Component({
  selector: 'app-reactiveformprac',
  templateUrl: './reactiveformprac.component.html',
  styleUrls: ['./reactiveformprac.component.css']
})
export class ReactiveformpracComponent implements OnInit {
dataForSubmission:any;
successText:any;
  constructor(private _http:HttpClient) { }
  url:string="https://5e8bb871be5500001689ec86.mockapi.io/api/v1/";
  ngOnInit(): void {
  }

loginForm= new FormGroup({
  name:new FormControl('',Validators.required),
  pwd:new FormControl ('',[Validators.required,Validators.maxLength(5)]),
  city:new FormControl ('')
});
//to check individual lines is completed
get checkName(){
  return this.loginForm.get('name')
}

get checkpwd(){
  return this.loginForm.get('pwd')
}

get checkcity(){
  return this.loginForm.get('city')
}

submitForm(loginForm){
  this.dataForSubmission=loginForm.value;

  //  this._http.post(this.url +"actions",this.dataForSubmission).subscribe((data)=>{console.log(data)}) or
  // this._http.post(this.url +"actions",this.loginForm.value).subscribe((data)=>{console.log(data)})  or
  // this._http.post(this.url + "actions",this.submitForm).subscribe((data)=>{console.log(data)})  or
  // this._http.post(`${this.url}${'actions'}`,this.submitForm).subscribe((data)=>{console.log(data)})

  // this._http.post(`${this.url}${'actions'}`,this.submitForm).subscribe
  // ((res)=>{alert("successful");}) //we can get succesful form api message
  this._http.post(`${this.url}${'actions'}`,this.submitForm).subscribe
  ((res)=>{this.successText= "successful Submitted";}) 

  

}
}
