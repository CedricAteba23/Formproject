import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {
  c:any
  titre=localStorage.getItem('title')
  // v=JSON.parse(this.titre)
  type=localStorage.getItem('type')

  constructor() { }
   
  ngOnInit(): void {
    // this.xxx()
    this.recup()
    console.log(localStorage.getItem('title'))
    // console.log(this.v);
    
  }
  @ViewChild("json") jsonElement?: ElementRef;
  public g: Object = { components: [] };

  recup(){
    const d=localStorage.getItem('components')
    this.c= JSON.parse(d)
    console.log(this.c)
  
    // console.log(this.titre);
    // this.g = { component:[this.c]} 
    // console.log(this.g) 
  }

  
  // xxx(){
  //   console.log(this.data)
  // }

  // lod(){
  //   let title=localStorage.getItem('titre')
  //   let type=localStorage.getItem('type')
  //     console.log(title)
  //     console.log(type);
  // }


}
