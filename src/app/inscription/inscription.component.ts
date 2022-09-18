import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticService } from '../services/authentic.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {


  loginform:FormGroup ;
  container: FormArray | undefined;
  constructor(private router: Router, public formbuilder:FormBuilder, private authService: AuthenticService) {

    this.loginform = this.formbuilder.group({
      'username':[null, Validators.required],
      'email':[null, Validators.required],
      'password':[null, Validators.required],
      'password2':[null, Validators.required],
      'container':this.formbuilder.array([])
    })
    
  }

  ngOnInit(): void {
  }
  async register(){
    await this.authService.register(this.loginform.value).subscribe(
      res =>{
        this.router.navigate(['/connexion']);
      },(err) =>{
        console.log(err)
      });
   
  }
}
