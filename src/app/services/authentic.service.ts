import { HttpClient, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { CanActivate, Router } from '@angular/router';


const api1='http://127.0.0.1:8000/users/register/';
const api2='http://127.0.0.1:8000/users/login/';



const httpOptions={
  headers:new HttpHeaders({'Content-type': 'application/json',
  'Authorization':'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjYzOTUwNjk0LCJpYXQiOjE2NjE3OTA2OTQsImp0aSI6IjViM2YwZGFhOTc5ZTQ2ZjM5MWMzNmNjMDEwY2NlOTkzIiwidXNlcl9pZCI6Mn0.84DqjkmWT2B5Rat0Xw4xm0eCUWqCpkhsjUbkIPsXcgw'
})
};

@Injectable({
  providedIn: 'root'
})
export class AuthenticService {
  // apiRoot: 'http://127.0.0.1:8000/token/';
  baseApiUrl: 'https://file.io';
  

  constructor(private http:HttpClient, private router:Router) { }

  register(data:any){
    const url1 = `${api1}`;
      return this.http.post(url1, data)
  }

  connexion(data:any): Observable<any>{
    const url = `${api2}`;
    return this.http.post(url, data, httpOptions)
  
  }
  
  // savetoken(token:string):void{
  //   localStorage.setItem('token', token)
  //   this.router.navigate(['/enquete'])
  // }

  // cleartoken(){
  //   localStorage.removeItem('token')
  //   this.router.navigate(['/connexion'])
  // }

  // gettoken(): string | null{
  //   return localStorage.getItem('token')
  // }
}


