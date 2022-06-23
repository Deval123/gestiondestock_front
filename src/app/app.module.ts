import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageInscriptionComponent } from './pages/page-inscription/page-inscription.component';
import { PageDashboardComponent } from './pages/page-dashboard/page-dashboard.component';
import { PageStatistiquesComponent } from './pages/page-statistiques/page-statistiques.component';
import { MenuComponent } from './composants/menu/menu.component';
import { HeaderComponent } from './composants/header/header.component';
import { DetailArticleComponent } from './composants/detail-article/detail-article.component';
import { PageArticleComponent } from './pages/articles/page-article/page-article.component';
import { PaginationComponent } from './composants/pagination/pagination.component';
import { BouttonActionComponent } from './composants/boutton-action/boutton-action.component';
import { NouvelArticleComponent } from './pages/articles/nouvel-article/nouvel-article.component';
import { PageMvtstockComponent } from './pages/mvtstock/page-mvtstock/page-mvtstock.component';
import { DetailMvtStockArticleComponent } from './composants/detail-mvt-stock-article/detail-mvt-stock-article.component';
import { DetailMvtStockComponent } from './composants/detail-mvt-stock/detail-mvt-stock.component';
import { DetailCltFrsComponent } from './composants/detail-clt-frs/detail-clt-frs.component';
import { PageClientComponent } from './pages/client/page-client/page-client.component';
import { PageFournisseurComponent } from './pages/fournisseur/page-fournisseur/page-fournisseur.component';
import { NouveauCltFrsComponent } from './composants/nouveau-clt-frs/nouveau-clt-frs.component';
import { DetailCmdCltFrsComponent } from './composants/detail-cmd-clt-frs/detail-cmd-clt-frs.component';
import { DetailCmdComponent } from './composants/detail-cmd/detail-cmd.component';
import { PageCmdCltFrsComponent } from './pages/page-cmd-clt-frs/page-cmd-clt-frs.component';
import { NouvelleCmdCltFrsComponent } from './composants/nouvelle-cmd-clt-frs/nouvelle-cmd-clt-frs.component';
import { PageCategoriesComponent } from './pages/categories/page-categories/page-categories.component';
import { NouvelleCategorieComponent } from './pages/categories/nouvelle-categorie/nouvelle-categorie.component';
import { PageUtilisateurComponent } from './pages/utilisateur/page-utilisateur/page-utilisateur.component';
import { DetailUtilisateurComponent } from './composants/detail-utilisateur/detail-utilisateur.component';
import { NouvelUtilisateurComponent } from './pages/utilisateur/nouvel-utilisateur/nouvel-utilisateur.component';
import { PageProfilComponent } from './pages/profil/page-profil/page-profil.component';
import { ChangerMotDePasseComponent } from './pages/profil/changer-mot-de-passe/changer-mot-de-passe.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    PageLoginComponent,
    PageInscriptionComponent,
    PageDashboardComponent,
    PageStatistiquesComponent,
    MenuComponent,
    HeaderComponent,
    DetailArticleComponent,
    PageArticleComponent,
    PaginationComponent,
    BouttonActionComponent,
    NouvelArticleComponent,
    PageMvtstockComponent,
    DetailMvtStockArticleComponent,
    DetailMvtStockComponent,
    DetailCltFrsComponent,
    PageClientComponent,
    PageFournisseurComponent,
    NouveauCltFrsComponent,
    DetailCmdCltFrsComponent,
    DetailCmdComponent,
    PageCmdCltFrsComponent,
    NouvelleCmdCltFrsComponent,
    PageCategoriesComponent,
    NouvelleCategorieComponent,
    PageUtilisateurComponent,
    DetailUtilisateurComponent,
    NouvelUtilisateurComponent,
    PageProfilComponent,
    ChangerMotDePasseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
