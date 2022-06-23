/* tslint:disable */
import { AdressesDto } from './adresses-dto';
import { CommandeFournisseurDto } from './commande-fournisseur-dto';
export interface FournisseurDto {
  adresse?: AdressesDto;
  commandeFournisseurs?: Array<CommandeFournisseurDto>;
  id?: number;
  identreprise?: number;
  mail?: string;
  nom?: string;
  numTel?: string;
  photo?: string;
  prenom?: string;
}
