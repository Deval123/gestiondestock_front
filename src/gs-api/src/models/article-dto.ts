/* tslint:disable */
import { CategoryDto } from './category-dto';
export interface ArticleDto {
  category?: CategoryDto;
  codeArticle?: string;
  designation?: string;
  id?: number;
  identreprise?: number;
  photo?: string;
  prixUnitaireHt?: number;
  prixUnitaireTTC?: number;
  tauxTVA?: number;
}
