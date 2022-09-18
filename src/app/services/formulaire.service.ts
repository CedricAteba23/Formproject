import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Formulaire } from '../models/formulaire.model';

// const baseApiUrl = "https://file.io"
const baseUrl='http://127.0.0.1:8000/formulaire/'
const baseUrl2='http://127.0.0.1:8000/formulaire'

const httpOptions={
  headers:new HttpHeaders({'Content-type': 'application/json',
  'Authorization':'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjYzOTUwNjk0LCJpYXQiOjE2NjE3OTA2OTQsImp0aSI6IjViM2YwZGFhOTc5ZTQ2ZjM5MWMzNmNjMDEwY2NlOTkzIiwidXNlcl9pZCI6Mn0.84DqjkmWT2B5Rat0Xw4xm0eCUWqCpkhsjUbkIPsXcgw'
})
};
 
@Injectable({
  providedIn: 'root'
})
export class FormulaireService {
   baseApiUrl = "https://file.io"
  constructor(private http: HttpClient) { }
  getf(): Observable<any>{
    return this.http.get(baseUrl, httpOptions)
  }
  getformulaire(): Observable<any>{
    return this.http.get(baseUrl, httpOptions)
  }

  getAll(): Observable<Formulaire[]> {
    return this.http.get<Formulaire[]>(baseUrl, httpOptions);
  }
  get(id: any): Observable<Formulaire> {
    return this.http.get(`${baseUrl2}/${id}/`);
  }

  

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data, httpOptions );
  }
  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }
  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl2}/${id}`);
  }
  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }
  findByTitle(titre: any): Observable<Formulaire[]> {
    return this.http.get<Formulaire[]>(`${baseUrl}?title=${titre}`);
  }

  upload(file):Observable<any> {
  
    // Create form data
    const formData = new FormData(); 
      
    // Store form name as "file" with file data
    formData.append("file", file, file.name);
      
    // Make http post request over api
    // with formData as req
    return this.http.post(this.baseApiUrl, formData)
}

}
