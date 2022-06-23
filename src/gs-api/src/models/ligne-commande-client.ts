/* tslint:disable */
import { Article } from './article';
import { CommandeClient } from './commande-client';
export interface LigneCommandeClient {
  article?: Article;
  commandeClient?: CommandeClient;
  creationDate?: number;
  id?: number;
  identreprise?: number;
  lastModifiedDate?: number;
  prixUnitaire?: number;
  quantite?: number;
}
