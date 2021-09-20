import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { signInData } from 'src/app/model/signInData';




@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  isAuthenticated =false;
  
  constructor(private http:HttpClient) { }

  authenticate(SignInData:signInData){

    var status:number;
    
    

    console.log(SignInData)
    this.http.post('http://localhost:8080/login.php',SignInData).subscribe(responseData=> console.log(responseData));


   /* fetch('http://localhost:8080/model.php', {

      
      method:'POST',
      body:JSON.stringify(body),
      credentials:'include'

    })
    .then(res => {
      status = res.status
      return res.text();
    })
    .then(data =>{
      alert(data)
      if (status ==200){
        this.isAuthenticated=true;
      }
    })
    .catch(err => {alert(err)})
  */

  }
}
