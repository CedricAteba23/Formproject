import { CommonModule } from '@angular/common';
// import { HttpClientModule } from '@angular/common/http';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Formio, FormioModule } from 'angular-formio';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PreviewComponent } from './preview/preview.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { EnqueteComponent } from './enquete/enquete.component';
import { CreatenqueteComponent } from './createnquete/createnquete.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DestinatairesComponent } from './destinataires/destinataires.component';
// import { TokenInterceptor } from './intercepteurs/token.interceptor';
import { LienformComponent } from './lienform/lienform.component';
import { ListformComponent } from './listform/listform.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginuserComponent } from './loginuser/loginuser.component';
// import { FormioGridModule } from 'angular-formio/grid';




@NgModule({
  declarations: [
    AppComponent,
    PreviewComponent,
    FormulaireComponent,
    ConnexionComponent,
    InscriptionComponent,
    EnqueteComponent,
    CreatenqueteComponent,
    DestinatairesComponent,
    LienformComponent,
    ListformComponent,
    HomepageComponent,
    LoginuserComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormioModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    // FormioGridModule
  ],
  providers: [ HttpClientModule,FormBuilder,
  // {     
  //   provide: HTTP_INTERCEPTORS,
  //   useClass: TokenInterceptor,
  //   multi: true
  // }
],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
