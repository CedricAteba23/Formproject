import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticService } from '../services/authentic.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  // Variable to store shortLink from api response
  shortLink: string = "";
  loading: boolean = false; // Flag variable
  file: File = null; // Variable to store file
  
  loginform:FormGroup ;
  container: FormArray | undefined;
  error: any;
  constructor(private router: Router, public formbuilder:FormBuilder, private authService:AuthenticService) { 
    this.loginform = this.formbuilder.group({
      'username':[null, Validators.required],
      'email':[null, Validators.required],
      'password':[null, Validators.required],
      'container':this.formbuilder.array([])
  })
}

  ngOnInit(): void {
  }


  async login(){
    await this.authService.connexion(this.loginform.value).subscribe(
      res =>{
        this.router.navigate(['/enquete']);
        console.log(res.access_token)
        localStorage.setItem('values', res.access_token)
        localStorage.setItem('refresh', res.refresh_token)
        // console.log(res)
      },(err) =>{
        console.log(err)
      });
  }



}

