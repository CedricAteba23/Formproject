import { Component, OnInit } from '@angular/core';
import { EnqueteService } from '../services/enquete.service';
// import { Enquete } from '../models/enquete.model';

import { HttpErrorResponse } from '@angular/common/http';
import { FormArray, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';


@Component({
  selector: 'app-enquete',
  templateUrl:'./enquete.component.html',
  styleUrls: ['./enquete.component.css']
})
export class EnqueteComponent implements OnInit {
 
  //  enquetes: Enquete[]=[];
  enquetes: any[]=[]
   loginform:FormGroup ;
   container: FormArray | undefined;

 
  constructor(public enqueteservice: EnqueteService, private formBuilder: FormBuilder ) { 
    this.loginform = this.formBuilder.group({
      'titre':[null, Validators.required],
      'type':[null, Validators.required],
      'description':[null, Validators.required],
      // 'enqueteur':[null, Validators.required],
      'container':this.formBuilder.array([])
    })

  }

  ngOnInit(): void {
    this.getenk()
    // this.getsurv()
   }

  //  async getenk(){
  //    await this.enqueteservice.getEnquete().subscribe(res =>{
  //      console.log(res);
  //      this.enquetes = res;
  //    }, err =>{
  //      console.log(err)
  //    });
  //  }


  //  async supp(){
  //   await this.enqueteservice.delete().subscribe(res =>{
  //     console.log(res);
  //     this.enquetes = res;
  //   }, err =>{
  //     console.log(err)
  //   });
   
    // getenk(){
    //   this.enqueteservice.getAll().subscribe(
    //     (response:Enquete[])=>{
    //       this.enquete = response
    //       console.log(this.enquete)
    //     },
    //     (error:HttpErrorResponse)=>{
    //        alert(error);
    //     }
    //   )  
    // }


// Previous

     getenk(){
      
       
       this.enqueteservice.getEnquete().subscribe(res =>{

        this.enquetes = res.results;
        
        console.log(this.enquetes)

        localStorage.setItem('tab_enquete', JSON.stringify(this.enquetes))
        console.log(localStorage.setItem('tab_enquete', JSON.stringify(this.enquetes)));
        
      }, err =>{
        console.log(err)
      });
   
    }


    
    supp(id:number){
      this.enqueteservice.delete(id).subscribe(
        (response:void)=>{
          this.getenk()
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
        )    
    }

// Previous



    // public searchEnquetes(key: string): void {
    //   console.log(key);
    //   const results: Enquete[] = [];
    //   for (const enquete of this.enquete) {
    //     if (enquete.titre.toLowerCase().indexOf(key.toLowerCase()) !== -1
    //     || enquete.type.toLowerCase().indexOf(key.toLowerCase()) !== -1
    //     || enquete.description.toLowerCase().indexOf(key.toLowerCase()) !== -1
    //     || enquete.enqueteur.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
    //       results.push(enquete);
    //     }
    //   }
    //   this.enquete = results;
    //   if (results.length === 0 || !key) {
    //     this.getenk();
    //   }
    // }
  
   
  // getsurv():void{
  //   this.enqueteservice.getsurvey().subscribe((data: any)=>{
  //       this.enquetes=data
  //       console.log(this.enquetes);
  //   })
  // }

  
  

   
    



}

