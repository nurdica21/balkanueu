import { FormatWidth } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { signInData } from '../model/signInData';
import { AuthenticationService } from '../service/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authenticationService:AuthenticationService) { }

  ngOnInit(): void {
  }

 
  onSubmit(signInForm: NgForm){

    
    const SignInData = new signInData(signInForm.value.email,signInForm.value.pwd,signInForm.value.crud_req);

    this.authenticationService.authenticate(SignInData);
    
    
    
   /* function getFormData(signInForm:any) {
      const formData = new FormData();
      Object.keys(signInForm).forEach(key => formData.append(key, signInForm[key]));
      return formData;
      
    }*/

    /*var status:number;

   
    
    console.log(JSON.stringify(SignInData));

    fetch('http://localhost:8080/model.php', {

      
      method:'POST',
      body:JSON.stringify(SignInData),
      credentials:'include'

    })
    .then(res => {
      status = res.status
      return res.text();
    })
    .then(data =>{
      alert(data)
      if (status ==200){
        console.log("sve 5")
      }
    })
    .catch(err => {alert(err)})
  
*/
  }
    
}


