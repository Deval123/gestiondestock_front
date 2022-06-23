/* tslint:disable */
import { Adresses } from './adresses';
import { CommandeFournisseur } from './commande-fournisseur';
export interface Fournisseur {
  adresse?: Adresses;
  commandeFournisseurs?: Array<CommandeFournisseur>;
  creationDate?: number;
  id?: number;
  identreprise?: number;
  lastModifiedDate?: number;
  mail?: string;
  nom?: string;
  numTel?: string;
  photo?: string;
  prenom?: string;
}
