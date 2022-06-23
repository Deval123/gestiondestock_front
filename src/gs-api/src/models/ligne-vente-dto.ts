/* tslint:disable */
import { Article } from './article';
import { VentesDto } from './ventes-dto';
export interface LigneVenteDto {
  article?: Article;
  id?: number;
  identreprise?: number;
  prixUnitaire?: number;
  quantite?: number;
  vente?: VentesDto;
}
