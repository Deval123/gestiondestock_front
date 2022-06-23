/* tslint:disable */
import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationInterface } from './api-configuration';

import { ApiService } from './services/api.service';
import { Gestiondestockv1commandeClientsService } from './services/gestiondestockv-1commande-clients.service';
import { Gestiondestockv1CommandeFournisseursService } from './services/gestiondestockv-1commande-fournisseurs.service';
import { Gestiondestockv1articlesService } from './services/gestiondestockv-1articles.service';
import { Gestiondestockv1categoryService } from './services/gestiondestockv-1category.service';
import { Gestiondestockv1clientsService } from './services/gestiondestockv-1clients.service';
import { Gestiondestockv1entrepriseService } from './services/gestiondestockv-1entreprise.service';
import { Gestiondestockv1fournisseursService } from './services/gestiondestockv-1fournisseurs.service';
import { Gestiondestockv1ligneVenteService } from './services/gestiondestockv-1ligne-vente.service';
import { Gestiondestockv1mvtStockService } from './services/gestiondestockv-1mvt-stock.service';
import { Gestiondestockv1photosService } from './services/gestiondestockv-1photos.service';
import { Gestiondestockv1utilisateursService } from './services/gestiondestockv-1utilisateurs.service';
import { Gestiondestockv1ventesService } from './services/gestiondestockv-1ventes.service';

/**
 * Provider for all Api services, plus ApiConfiguration
 */
@NgModule({
  imports: [
    HttpClientModule
  ],
  exports: [
    HttpClientModule
  ],
  declarations: [],
  providers: [
    ApiConfiguration,
    ApiService,
    Gestiondestockv1commandeClientsService,
    Gestiondestockv1CommandeFournisseursService,
    Gestiondestockv1articlesService,
    Gestiondestockv1categoryService,
    Gestiondestockv1clientsService,
    Gestiondestockv1entrepriseService,
    Gestiondestockv1fournisseursService,
    Gestiondestockv1ligneVenteService,
    Gestiondestockv1mvtStockService,
    Gestiondestockv1photosService,
    Gestiondestockv1utilisateursService,
    Gestiondestockv1ventesService
  ],
})
export class ApiModule {
  static forRoot(customParams: ApiConfigurationInterface): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: {rootUrl: customParams.rootUrl}
        }
      ]
    }
  }
}
