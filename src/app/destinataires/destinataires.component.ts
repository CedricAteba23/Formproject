import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-destinataires',
  templateUrl: './destinataires.component.html',
  styleUrls: ['./destinataires.component.css']
})
export class DestinatairesComponent implements OnInit {
  email:any=[]
  // dest: FormGroup
  lien=localStorage.getItem('link')
  constructor(private formBuilder: FormBuilder) {
   
    
   }

  ngOnInit(): void {
    // console.log(this.dest.value.destinataires);
  }
  add(){
    // let a = this.dest.value
    //  this.email
    //  this.email.push(a)
    //  console.log( this.email.valueOf(0))
    // console.log(a)
    // let s=JSON.stringify(this.email)
    
    
    // localStorage.setItem('adresses', s)
    
    
    // let d=localStorage.getItem('adresses')

    // console.log(JSON.parse(d));
    
    // let listfront= document.getElementById("list-group") 
    
    // let li = document.createElement("li");
    // li.setAttribute("class","list-group")
    // li.innerText = this.email
    // listfront?.appendChild(li);
    // document.body.appendChild(li)



    // this.email.forEach((item) => {
    //   console.log(item);
    //   let li = document.createElement("li");
    //   li.setAttribute("class","list-group")
    //   li.innerText = item.destinataires;
    //   // listfront?.appendChild(li);
    //   document.body.appendChild(li)
    // });
    let a = document.getElementById("champ") as HTMLInputElement 
     console.log(a.value)
     this.email.push(a.value)
     console.log(this.email)
     localStorage.setItem('e_mail', JSON.stringify(this.email))

  }
  

  smtp(){
    let XDomainRequest;
    var Email = {
      send: function(a) {
          return new Promise(function(n, e) {
              a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send";
              var t = JSON.stringify(a);
              Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function(e) { n(e) })
          })
      },
      ajaxPost: function(e, n, t) {
          var a = Email.createCORSRequest("POST", e);
          a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function() {
              var e = a.responseText;
              null != t && t(e)
          }, a.send(n)
      },
      ajax: function(e, n) {
          var t = Email.createCORSRequest("GET", e);
          t.onload = function() {
              var e = t.responseText;
              null != n && n(e)
          }, t.send()
      },
      createCORSRequest: function(e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t }
    };
//Envoyer le lien aux sujets par email
    let tab_email=localStorage.getItem('e_mail')
    let d= JSON.parse(tab_email)
    console.log(d)
    Email.send({
      SecureToken : "0b31fe44-94fd-4b34-96dd-6cc6627db7b2",
      To : d,
      From : "surveydigitale@gmail.com",
      Subject : " Voici votre formulaire",
      // Body : "<p>Form from : "+localStorage.getItem('enqueteur')+"<br/>Please click on the following link to answer my form.</p>" +localStorage.getItem('link'),
      Body:"<p>Form from : <br/>Please click on the following link to answer my form.</p>" + localStorage.getItem('link')+" " 
  }).then(
    message => alert(message)
  );
  console.log(localStorage.getItem('link') );
  
  }
}
