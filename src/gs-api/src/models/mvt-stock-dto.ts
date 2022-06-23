/* tslint:disable */
import { ArticleDto } from './article-dto';
export interface MvtStockDto {
  article?: ArticleDto;
  dateMvt?: number;
  id?: number;
  identreprise?: number;
  quantite?: number;
  sourceMvtStock?: 'COMMANDE_CLIENT' | 'COMMANDE_FOURNISSEUR' | 'VENTE';
  typeMvt?: 'ENTREE' | 'SORTIE' | 'CORRECTION_POS' | 'CORRECTION_NEG';
}
