import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Formulaire } from '../models/formulaire.model';
import { FormulaireService } from '../services/formulaire.service';


@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {
  title = 'Surveyformbuider';
  x:any
  forms: Formulaire={
    titre:'',
    type:'',
    elements:''
  }
  formul:FormGroup ;
  container: FormArray | undefined;
   tab_enq=localStorage.getItem('tab_enquete')
  // Variable to store shortLink from api response
  shortLink: string = "";
  loading: boolean = false; // Flag variable
  file: File = null; // Variable to store file

  // previewtitle:FormGroup;
  constructor(public formulaireservice:FormulaireService, private formBuilder: FormBuilder, private route:ActivatedRoute) { 

    this.formul = this.formBuilder.group({
      'id':[null, Validators.required],
      'titre':[null, Validators.required],
      'type':[null, Validators.required],
      'elements':[null, Validators.required],
      'enquete':[null, Validators.required],
      // 'enquete':[null, Validators.required],
      // 'logo':[null, Validators.required],
      // 'enqueteur':[null, Validators.required],
      'container':this.formBuilder.array([])
    })
    localStorage.setItem('titre', JSON.stringify(this.formul.value.titre))
    console.log(this.formul.value.titre);
    
    localStorage.setItem('type', (this.formul.value.type))

   
    // this.previewtitle=this.formBuilder.group({
    //   'title':[null, Validators.required],
    //   'type':[null, Validators.required],
    //   'container':this.formBuilder.array([])
    // })
  }

  ngOnInit(): void {
    // console.log(this.form);
   
    
    console.log(JSON.parse(this.tab_enq));
    
  }


  @ViewChild("json") jsonElement?: ElementRef;
  public form: Object = { components: [] };
  public g: Object={ component:[]}
 


  onChange(event: any) {
    this.jsonElement.nativeElement.innerHTML = '';
    
    let q = JSON.stringify(event.form, null, 4);
    console.log(q);
    
    
    // this.x={ component:[JSON.parse(b)]} 
    
    this.g = { component:[JSON.parse(q)]} 
    console.log(this.g)
    // console.log(event.form);
    localStorage.setItem('components', q )

  }


saveform(){
  
  this.formul.value.enquete = (this.route.snapshot.params["id"])
  console.log(this.formul.value.enquete );
  
  this.formul.value.elements=  JSON.stringify(localStorage.getItem('components'))
  console.log(this.formul.value.elements)
  
  // console.log(this.formul.value.titre);
  // localStorage.setItem('title', this.formul.value.titre)
  // localStorage.setItem('type', this.formul.value.type)
  this.formulaireservice.create(this.formul.value)
  .subscribe(
     res => {
        console.log(res);
        
    },
    e => console.error(e)
  );
}

onUpload() {
  this.loading = !this.loading;
  console.log(this.file);
  this.formulaireservice.upload(this.file).subscribe(
      (event: any) => {
          if (typeof (event) === 'object') {

              // Short link via api response
              this.shortLink = event.link;

              this.loading = false; // Flag variable 
          }
      }
  );
}



  
}
