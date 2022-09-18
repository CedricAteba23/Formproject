import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';

import { Enquete } from '../models/enquete.model';


const baseUrl='http://127.0.0.1:8000/enquetes/';
const api='http://127.0.0.1:8000/enquetes/<int:pk>/';

const httpOptions={
  headers:new HttpHeaders({'Content-type': 'application/json',
  'Authorization':'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjYzOTUwNjk0LCJpYXQiOjE2NjE3OTA2OTQsImp0aSI6IjViM2YwZGFhOTc5ZTQ2ZjM5MWMzNmNjMDEwY2NlOTkzIiwidXNlcl9pZCI6Mn0.84DqjkmWT2B5Rat0Xw4xm0eCUWqCpkhsjUbkIPsXcgw'
})
};

@Injectable({
  providedIn: 'root'
})
export class EnqueteService {

  constructor(private http:HttpClient) { }

  creer(data:any): Observable<any>{
    const url = `${baseUrl}`;
    return this.http.post(url, data, httpOptions)
  
  }
  
  getEnquete(): Observable<any>{
    return this.http.get(baseUrl, httpOptions)
  }

  // delete(): Observable<any>{
  //   return this.http.delete(api2)
  // }

  getAll(): Observable<Enquete[]> {
    return this.http.get<Enquete[]>(baseUrl, httpOptions);
  }

  get(id: any): Observable<Enquete> {
    return this.http.get(`${api}/${id}`,httpOptions);
  }

  // create(data: any): Observable<any> {
  //   return this.http.post(baseUrl, data, httpOptions);
  // }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${api}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(titre: any): Observable<Enquete[]> {
    return this.http.get<Enquete[]>(`${baseUrl}?title=${titre}`);
  }







}
