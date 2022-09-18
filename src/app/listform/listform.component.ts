import { Component, OnInit } from '@angular/core';
import { Formulaire } from '../models/formulaire.model';
import { FormulaireService } from '../services/formulaire.service';

@Component({
  selector: 'app-listform',
  templateUrl: './listform.component.html',
  styleUrls: ['./listform.component.css']
})
export class ListformComponent implements OnInit {
  form:any=[]
  // form?: Formulaire[]
  currentFormulaire: Formulaire = {};
  currentIndex = -1;
  constructor( private formulaireservice: FormulaireService) { }

  ngOnInit(): void {
    this.allforms()
    // this.retrieveFormulaire()
  }
 
  allforms(){
    this.formulaireservice.getf().subscribe(res =>{
      console.log(res.results);
      this.form = res.results;
    }, err =>{
      console.log(err)
    });
  }

  // retrieveFormulaire(): void {
  //   this.formulaireservice.getAll()
  //     .subscribe({
  //       next: (data) => {
  //         this.form = data;
  //         console.log(data);
  //       },
  //       error: (e) => console.error(e)
  //     });
  // }


  // setActiveFormalaire(form: Formulaire, index: number): void {
  //   this.currentFormulaire = form;
  //   this.currentIndex = index;
  // }

}
