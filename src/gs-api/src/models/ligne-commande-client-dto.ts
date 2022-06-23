/* tslint:disable */
import { ArticleDto } from './article-dto';
import { CommandeClientDto } from './commande-client-dto';
export interface LigneCommandeClientDto {
  article?: ArticleDto;
  commandeclient?: CommandeClientDto;
  id?: number;
  identreprise?: number;
  prixUnitaire?: number;
  quantite?: number;
}
