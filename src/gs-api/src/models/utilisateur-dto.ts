/* tslint:disable */
import { AdressesDto } from './adresses-dto';
import { EntrepriseDto } from './entreprise-dto';
export interface UtilisateurDto {
  adresse?: AdressesDto;
  dateDeNaissance?: number;
  email?: string;
  entreprise?: EntrepriseDto;
  id?: number;
  motDePasse?: string;
  nom?: string;
  numTel?: string;
  photo?: string;
  prenom?: string;
}
