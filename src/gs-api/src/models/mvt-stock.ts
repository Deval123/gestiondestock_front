/* tslint:disable */
import { Article } from './article';
export interface MvtStock {
  article?: Article;
  creationDate?: number;
  dateMvt?: number;
  id?: number;
  identreprise?: number;
  lastModifiedDate?: number;
  quantite?: number;
  sourceMvt?: 'COMMANDE_CLIENT' | 'COMMANDE_FOURNISSEUR' | 'VENTE';
  typeMvt?: 'ENTREE' | 'SORTIE' | 'CORRECTION_POS' | 'CORRECTION_NEG';
}
