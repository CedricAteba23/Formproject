import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Surveyformbuider';

  ngOnInit():void{
    // console.log(this.form);
    // this.XX()
    
  }

  @ViewChild("json") jsonElement?: ElementRef;
  public form: Object = { components: []};
    
  onChange(event:any) {
    this.jsonElement.nativeElement.innerHTML = '';
    
    let q=JSON.stringify(event.form, null, 4);
    console.log(q);
    
    console.log(event.form);
   
  }

  // this.jsonElement.nativeElement.appendChild(document.createTextNode(JSON.stringify(event.form, null, 4)));


  // onChange(event) {
  //   console.log(event.type);
  //   this.jsonElement.nativeElement.innerHTML = "";
  //   this.jsonElement.nativeElement.appendChild(
  //     document.createTextNode(JSON.stringify(event.form, null, 4))
  //   );
  //   console.log(this.jsonElement.nativeElement.appendChild(
  //     document.createTextNode(JSON.stringify(event.form, null, 4))
  //   ))
  // }

  // XX(){
  //   let v = JSON.stringify(this.form)
  //   console.log(v);
  //   localStorage.setItem('val',v);

  //   this.onChange(event)

  //   let c =JSON.stringify(localStorage.getItem('val'))
  //   console.log(c);
  // }

 
}