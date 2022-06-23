/* tslint:disable */
import { Adresses } from './adresses';
import { CommandeClient } from './commande-client';
export interface Client {
  adresse?: Adresses;
  commandeclient?: Array<CommandeClient>;
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
