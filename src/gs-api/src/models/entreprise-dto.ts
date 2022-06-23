/* tslint:disable */
import { AdressesDto } from './adresses-dto';
export interface EntrepriseDto {
  adresse?: AdressesDto;
  codeFiscal?: string;
  description?: string;
  email?: string;
  id?: number;
  nom?: string;
  numTel?: string;
  photo?: string;
  siteWeb?: string;
}
