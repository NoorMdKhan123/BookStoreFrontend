import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  token:any

  constructor(private httpService : HttpService ) {
    this.token=localStorage.getItem("token")
   }

  userRegistration(reqData:any)
  {
let httpOptions=
{
  headers : new HttpHeaders(
    {
      'Content-type':'application/json',
     'Authorization': 'token'
    }
  )
}
    console.log(reqData);
    return this.httpService.postService('/User/register',reqData, false, httpOptions)
  }

  userLogin(reqData:any, token:any)
  {
let httpOptions=
{
  
  headers : new HttpHeaders(
    {
      'Content-type':'application/json',
       Authorization :'Bearer ' + token
       
   
    }
  )
}
    console.log(reqData);
    return this.httpService.postService('/User/login',reqData, true, httpOptions)
  }

  userForgotPassword(reqData:any)
  {
  let httpOptions=
  {
  headers : new HttpHeaders(
    {
      'Content-type':'application/json',
      
      
    
    }
  )
  }
    console.log(reqData);
    return this.httpService.postService('/User/forgotPassword',reqData, false, httpOptions)
  }
  

  userResetPassword(reqData:any, token : any)
{
let httpOptions=
{
headers : new HttpHeaders(
  {
    'Content-type':'application/json',
    Authorization : 'Bearer ' + token
  }
)
}
  console.log(reqData);
  console.log("token",token);
  return this.httpService.putService('/User/resetPassword',reqData, true, httpOptions)
}

addressUpdate(reqData:any, token : any)
{
let httpOptions=
{
headers : new HttpHeaders(
  {
    'Content-type':'application/json',
    Authorization : 'Bearer ' + token
  }
)
}
  console.log(reqData);
  console.log("token",token);
  return this.httpService.putService('/Address',reqData, true, httpOptions)
}






}
