import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Enquete } from '../models/enquete.model';
import { EnqueteService } from '../services/enquete.service';

@Component({
  selector: 'app-createnquete',
  templateUrl: './createnquete.component.html',
  styleUrls: ['./createnquete.component.css']
})
export class CreatenqueteComponent implements OnInit {
  // enquete: Enquete={
  //   titre: '',
  //   type:'',
  //   description: '',
  //   enqueteur:'',
  // }


  loginform:FormGroup ;
  container: FormArray | undefined;
  
  constructor(private enquetservice: EnqueteService, private route:ActivatedRoute, public router:Router, private formBuilder: FormBuilder ) {
    this.loginform = this.formBuilder.group({
      'titre':[null, Validators.required],
      'type':[null, Validators.required],
      'description':[null, Validators.required],
      // 'enqueteur':[null, Validators.required],
      'container':this.formBuilder.array([])
    })
    
   }

  ngOnInit(): void {
  }


  // async create(){
  //   await this.enquetservice.creer(this.loginform.value).subscribe(
  //     res =>{
  //       this.router.navigate(['/enquete']);
  //     },(err) =>{
  //       console.log(err)
  //     });
  // }
  saveEnquete(): void {
    this.enquetservice.creer(this.loginform.value).subscribe(
        res => {

          console.log(res);
          this.router.navigate(['/enquete'])
        },
         e => console.error(e)
      );

  }

}
