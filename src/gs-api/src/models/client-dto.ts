/* tslint:disable */
import { Adresses } from './adresses';
export interface ClientDto {
  adresse?: Adresses;
  id?: number;
  identreprise?: number;
  mail?: string;
  nom?: string;
  numTel?: string;
  photo?: string;
  prenom?: string;
}
