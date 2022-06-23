/* tslint:disable */
import { Category } from './category';
import { LigneCommandeClient } from './ligne-commande-client';
import { LigneCommandeFournisseur } from './ligne-commande-fournisseur';
import { LigneVente } from './ligne-vente';
import { MvtStock } from './mvt-stock';
export interface Article {
  category?: Category;
  codeArticle?: string;
  creationDate?: number;
  designation?: string;
  id?: number;
  identreprise?: number;
  lastModifiedDate?: number;
  ligneCommandeClients?: Array<LigneCommandeClient>;
  ligneCommandeFournisseurs?: Array<LigneCommandeFournisseur>;
  ligneVentes?: Array<LigneVente>;
  mvtStocks?: Array<MvtStock>;
  photo?: string;
  prixUnitaireHt?: number;
  prixUnitaireTTC?: number;
  tauxTVA?: number;
}
