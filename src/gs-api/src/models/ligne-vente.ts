/* tslint:disable */
import { Article } from './article';
import { Ventes } from './ventes';
export interface LigneVente {
  article?: Article;
  creationDate?: number;
  id?: number;
  identreprise?: number;
  lastModifiedDate?: number;
  prixUnitaire?: number;
  quantite?: number;
  vente?: Ventes;
}
