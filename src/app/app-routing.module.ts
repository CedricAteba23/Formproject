import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { CreatenqueteComponent } from './createnquete/createnquete.component';
import { DestinatairesComponent } from './destinataires/destinataires.component';
import { EnqueteComponent } from './enquete/enquete.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { HomepageComponent } from './homepage/homepage.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { LienformComponent } from './lienform/lienform.component';
import { ListformComponent } from './listform/listform.component';
import { LoginuserComponent } from './loginuser/loginuser.component';
import { PreviewComponent } from './preview/preview.component';




const routes: Routes = [
  // {
  //   pathMatch:'full',
  //   redirectTo:'/login',
  //   path:''
  // },
  // {
  //   component:LoginComponent,
  //   path:'login'
  // },
  // {
  //   component:RegisterComponent,
  //   path:'register'
  // },
  // {
  //   component:MdpComponent,
  //   path:'mdp'
  // },
  // {
  //   component:AcceuilComponent,
  //   path:'acceuil'
  // },
  // {
  //   component:ListenqueteComponent,
  //   path:'listenquete'
  // },
  // {
  //   component:GenerateformComponent,
  //   path:'generateform'
  // }
  {
      pathMatch:'full',
      redirectTo:'/homepage',
      path:''
  },
  {
    component:FormulaireComponent,
    path:'formulaire/:id'
  },
  
  {
    component:ConnexionComponent,
    path:'connexion'
  },
  {
    component:InscriptionComponent,
    path:'inscription'
  },
  {
    component:EnqueteComponent,
    path:'enquete'
  },
  {
    component:CreatenqueteComponent,
    path:'createnquete'
  },
  {
    component:PreviewComponent,
    path:'preview'
  },
  {
    component:DestinatairesComponent,
    path:'destinataires'
  },
  {
    component:LienformComponent,
    path:'lienform/:id'
  },
  {
    component:ListformComponent,
    path:'listform'
  },  
  {
    component:HomepageComponent,
    path:'homepage'
  },
  {
    component:LoginuserComponent,
    path:'loginuser/:id'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
