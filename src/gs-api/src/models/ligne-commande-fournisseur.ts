/* tslint:disable */
import { Article } from './article';
import { CommandeFournisseur } from './commande-fournisseur';
export interface LigneCommandeFournisseur {
  article?: Article;
  commandeFournisseur?: CommandeFournisseur;
  creationDate?: number;
  id?: number;
  identreprise?: number;
  lastModifiedDate?: number;
  prixUnitaire?: number;
  quantite?: number;
}
