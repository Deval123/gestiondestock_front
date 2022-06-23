/* tslint:disable */
import { Article } from './article';
export interface Category {
  article?: Array<Article>;
  codecategory?: string;
  creationDate?: number;
  designation?: string;
  id?: number;
  identreprise?: number;
  lastModifiedDate?: number;
}
