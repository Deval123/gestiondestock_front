/* tslint:disable */
import { ArticleDto } from './article-dto';
import { CommandeFournisseurDto } from './commande-fournisseur-dto';
export interface LigneCommandeFournisseurDto {
  article?: ArticleDto;
  commandeFournisseur?: CommandeFournisseurDto;
  id?: number;
  identreprise?: number;
  prixUnitaire?: number;
  quantite?: number;
}
