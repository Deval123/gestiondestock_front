import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageLoginComponent} from "./pages/page-login/page-login.component";
import {PageInscriptionComponent} from "./pages/page-inscription/page-inscription.component";
import {PageDashboardComponent} from "./pages/page-dashboard/page-dashboard.component";
import {PageStatistiquesComponent} from "./pages/page-statistiques/page-statistiques.component";
import {PageArticleComponent} from "./pages/articles/page-article/page-article.component";
import {NouvelArticleComponent} from "./pages/articles/nouvel-article/nouvel-article.component";
import {PageMvtstockComponent} from "./pages/mvtstock/page-mvtstock/page-mvtstock.component";
import {PageClientComponent} from "./pages/client/page-client/page-client.component";
import {PageFournisseurComponent} from "./pages/fournisseur/page-fournisseur/page-fournisseur.component";
import {NouveauCltFrsComponent} from "./composants/nouveau-clt-frs/nouveau-clt-frs.component";
import {PageCmdCltFrsComponent} from "./pages/page-cmd-clt-frs/page-cmd-clt-frs.component";
import {NouvelleCmdCltFrsComponent} from "./composants/nouvelle-cmd-clt-frs/nouvelle-cmd-clt-frs.component";
import {PageCategoriesComponent} from "./pages/categories/page-categories/page-categories.component";
import {NouvelleCategorieComponent} from "./pages/categories/nouvelle-categorie/nouvelle-categorie.component";
import {PageUtilisateurComponent} from "./pages/utilisateur/page-utilisateur/page-utilisateur.component";
import {NouvelUtilisateurComponent} from "./pages/utilisateur/nouvel-utilisateur/nouvel-utilisateur.component";
import {PageProfilComponent} from "./pages/profil/page-profil/page-profil.component";
import {ChangerMotDePasseComponent} from "./pages/profil/changer-mot-de-passe/changer-mot-de-passe.component";
import {ApplicationGuardService} from "./services/guard/application-guard.service";

const routes: Routes = [
  {
    path: 'login',
    component: PageLoginComponent
  },
  {
    path: 'inscrire',
    component: PageInscriptionComponent
  },
  {
    path: '',
    component: PageDashboardComponent,
    children: [
      {
        path: 'statistiques',
        component: PageStatistiquesComponent,
        canActivate: [ApplicationGuardService]
      },
      {
        path: 'articles',
        component: PageArticleComponent,
        canActivate: [ApplicationGuardService]
      },
      {
        path: 'nouvelarticle',
        component: NouvelArticleComponent,
        canActivate: [ApplicationGuardService]
      },
      {
        path: 'mvtstock',
        component: PageMvtstockComponent,
        canActivate: [ApplicationGuardService]
      },
      {
        path: 'clients',
        component: PageClientComponent,
        canActivate: [ApplicationGuardService]
      },
      {
        path: 'nouveauclient',
        component: NouveauCltFrsComponent,
        data: {
          origin: 'client'
        },
        canActivate: [ApplicationGuardService]
      },
      {
        path: 'commandesclient',
        component: PageCmdCltFrsComponent,
        data: {
          origin: 'client'
        },
        canActivate: [ApplicationGuardService]
      },
      {
        path: 'nouvellecommandeclient',
        component: NouvelleCmdCltFrsComponent,
        data: {
          origin: 'client'
        },
        canActivate: [ApplicationGuardService]
      },
      {
        path: 'fournisseurs',
        component: PageFournisseurComponent,
        canActivate: [ApplicationGuardService]
      },
      {
        path: 'nouveaufournisseur',
        component: NouveauCltFrsComponent,
        data: {
          origin: 'fournisseur'
        },
        canActivate: [ApplicationGuardService]
      },
      {
        path: 'commandesfournisseur',
        component: PageCmdCltFrsComponent,
        data: {
          origin: 'fournisseur'
        },
        canActivate: [ApplicationGuardService]
      },
      {
        path: 'nouvellecommandefournisseur',
        component: NouvelleCmdCltFrsComponent,
        data: {
          origin: 'fournisseur'
        },
        canActivate: [ApplicationGuardService]
      },
      {
        path: 'categories',
        component: PageCategoriesComponent,
        canActivate: [ApplicationGuardService]
      },
      {
        path: 'nouvellecategorie',
        component: NouvelleCategorieComponent,
        canActivate: [ApplicationGuardService]
      },
      {
        path: 'utilisateurs',
        component: PageUtilisateurComponent,
        canActivate: [ApplicationGuardService]
      },
      {
        path: 'nouvelutilisateur',
        component: NouvelUtilisateurComponent,
        canActivate: [ApplicationGuardService]
      },
      {
        path: 'profil',
        component: PageProfilComponent,
        canActivate: [ApplicationGuardService]
      },
      {
        path: 'changermotdepasse',
        component: ChangerMotDePasseComponent,
        canActivate: [ApplicationGuardService]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
