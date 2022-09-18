import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { Formulaire } from '../models/formulaire.model';
import { FormulaireService } from '../services/formulaire.service';

@Component({
  selector: 'app-lienform',
  templateUrl: './lienform.component.html',
  styleUrls: ['./lienform.component.css']
})
export class LienformComponent implements OnInit {
  @Input() viewMode = false;
  @Input()  forms:any=[]
  // forms: Formulaire={
  //   id:'',
  //   titre:'',
  //   type:'',
  //   elements:''
  // }
  loginform:FormGroup ;
  container: FormArray | undefined;
  q:any
  form:any=[]
  constructor(private formulaireservice: FormulaireService, private route: ActivatedRoute,) {}
    
  ngOnInit(): void {
    // let id:any
    // this.getformulaire(id)
    console.log(localStorage.getItem('link'))
    
    
    if (!this.viewMode) {
      // this.message = '';
      this.getformulaire(this.route.snapshot.params["id"]);
  }
  }

 getformulaire(id: String):void{
   this.formulaireservice.get(id).subscribe(
    (res)=>{
      // this.forms=res
      // console.log(res.elements);
      this.q=JSON.parse(res.elements)
      this.form={
        "components":[JSON.parse(this.q)]
      }

      
      console.log(this.q);
      console.log(this.form);
      
      this.forms= res
      console.log(res);
      
    }),
    (err: any)=>{
      console.log(err)
    }
 }

 generateform(){
  let g='http://localhost:4200/lienform/'+this.route.snapshot.params["id"]
  console.log(g);
   let lien = localStorage.setItem('link', g)

 }
}
