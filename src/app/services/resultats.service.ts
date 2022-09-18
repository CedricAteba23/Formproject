import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



const resultUrl='http://127.0.0.1:8000/resultats/';

const httpOptions={
  headers:new HttpHeaders({'Content-type': 'application/json',
  'Authorization':'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjYzOTUwNjk0LCJpYXQiOjE2NjE3OTA2OTQsImp0aSI6IjViM2YwZGFhOTc5ZTQ2ZjM5MWMzNmNjMDEwY2NlOTkzIiwidXNlcl9pZCI6Mn0.84DqjkmWT2B5Rat0Xw4xm0eCUWqCpkhsjUbkIPsXcgw'
})
};
@Injectable({
  providedIn: 'root'
})
export class ResultatsService {

  constructor(private http:HttpClient) { }

  answer(data:any): Observable<any>{
    const url = `${resultUrl}`;
    return this.http.post(url, data)
  
  }
}
