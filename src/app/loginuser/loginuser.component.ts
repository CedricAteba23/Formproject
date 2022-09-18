import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FormulaireService } from '../services/formulaire.service';
import { ResultatsService } from '../services/resultats.service';

@Component({
  selector: 'app-loginuser',
  templateUrl: './loginuser.component.html',
  styleUrls: ['./loginuser.component.css']
})
export class LoginuserComponent implements OnInit {
  @Input() viewMode = false;
  @Input()  forms:any=[]
  c:any
  q:any
  form:any=[]
  resu:FormGroup ;
  // viewMode: any;
  constructor( private formulaireservice: FormulaireService, private route: ActivatedRoute, private formBuilder: FormBuilder, private resultatservice: ResultatsService) { 
    this.resu = this.formBuilder.group({
      'email':[null, Validators.required],
      'Responses':[null, Validators.required],
      'duration':[null, Validators.required],
      'formulaire':[null, Validators.required],
      // 'elements':[null, Validators.required],
      // 'enquete':[null, Validators.required],
      // 'logo':[null, Validators.required],
      // 'enqueteur':[null, Validators.required],
      'container':this.formBuilder.array([])
    })
  }

  ngOnInit(): void {
    // this.recup()
    if (!this.viewMode) {
      // this.message = '';
      this.getformulaire(this.route.snapshot.params["id"]);
  }
  }

  @ViewChild("json") jsonElement?: ElementRef;
  public g: Object = { components: [] };


  onSubmit(submission: any) {
    let r= JSON.stringify(submission.data) 
    console.log(r)
    console.log(submission); // This will print out the full submission from Form.io API.
      
    this.resu.value.Responses = r
    console.log(this.resu.value.Responses);

    this.resu.value.formulaire = this.route.snapshot.params["id"]
    this.resultatservice.answer(this.resu.value).subscribe(
      res => {

        console.log(res);
        // this.router.navigate(['/enquete'])
      },
       e => console.error(e)
    );

  } 


  // recup(){
  //   const d=localStorage.getItem('components')
  //   this.c= JSON.parse(d)
  //   console.log(this.c)
  
  //   console.log(this.titre);
  //   this.g = { component:[this.c]} 
  //   console.log(this.g) 
  // }

  
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


}
