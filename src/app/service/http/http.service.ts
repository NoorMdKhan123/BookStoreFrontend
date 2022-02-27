import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  

  BaseUrl = environment.BaseUrl

  constructor(private http: HttpClient) { }

  postService(url:any,data:any,token:boolean=true, httpAuthOptions:any)
  {
    
     return this.http.post(this.BaseUrl + url, data, token && httpAuthOptions)
  }
  putService(url:any,payload:any,tokenRequired:boolean=true, httpAuthOptions:any)
  {
    console.log("Inside httpservice", payload);
    return this.http.put(this.BaseUrl + url, payload, tokenRequired && httpAuthOptions)
  }
  getService(url:any,tokenRequired:boolean=true, httpAuthOptions:any={})
  {
    return this.http.get(this.BaseUrl + url, tokenRequired && httpAuthOptions)
  }
  deleteService(url:any,payload:any={},tokenRequired:boolean=true, httpAuthOptions:any={})
  {
    return this.http.delete(this.BaseUrl + url, tokenRequired && httpAuthOptions)
  }
  
}
