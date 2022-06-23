/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { CategoryDto } from '../models/category-dto';
import { ArticleDto } from '../models/article-dto';
import { CommandeClientDto } from '../models/commande-client-dto';
import { LigneCommandeClientDto } from '../models/ligne-commande-client-dto';
import { CommandeFournisseurDto } from '../models/commande-fournisseur-dto';
import { LigneCommandeFournisseurDto } from '../models/ligne-commande-fournisseur-dto';
import { LigneVenteDto } from '../models/ligne-vente-dto';
import { ClientDto } from '../models/client-dto';
import { EntrepriseDto } from '../models/entreprise-dto';
import { FournisseurDto } from '../models/fournisseur-dto';
import { MvtStockDto } from '../models/mvt-stock-dto';
import { UtilisateurDto } from '../models/utilisateur-dto';
import { VentesDto } from '../models/ventes-dto';
import { AuthenticationResponse } from '../models/authentication-response';
import { AuthenticationRequest } from '../models/authentication-request';
@Injectable({
  providedIn: 'root',
})
class ApiService extends __BaseService {
  static readonly findByCodePath = '/category/codecategory/{codecategory}';
  static readonly findByIdPath = '/category/id/{id}';
  static readonly deleteArticlePath = '/gestiondestock/v1/CommandeClients/delete/article/{idCommande}/{idLigneCommande}}';
  static readonly findAllLigneCommandesClientByCommandeClientIdPath = '/gestiondestock/v1/CommandeClients/ligneCommandes/{idCommande}';
  static readonly updateArticlePath = '/gestiondestock/v1/CommandeClients/update/article/{idCommande}/{idLigneCommande}/{idArticle}';
  static readonly findByCode_1Path = '/gestiondestock/v1/CommandeClients/{codeCommandeClient}';
  static readonly findAllPath = '/gestiondestock/v1/CommandeFournisseurs/all';
  static readonly savePath = '/gestiondestock/v1/CommandeFournisseurs/create';
  static readonly findAllLigneCommandesFournisseurByCommandeFournisseurIdPath = '/gestiondestock/v1/CommandeFournisseurs/ligneCommandes/{idCommande}';
  static readonly updateEtatCommandePath = '/gestiondestock/v1/CommandeFournisseurs/update/etat/{idCommande}/{etatCommande}';
  static readonly updateFournisseurPath = '/gestiondestock/v1/CommandeFournisseurs/update/fournisseur/{idCommande}/{idClient}';
  static readonly findByCode_2Path = '/gestiondestock/v1/CommandeFournisseurs/{codeCommandeFournisseur}';
  static readonly findById_1Path = '/gestiondestock/v1/CommandeFournisseurs/{idCommandeFournisseur}';
  static readonly findAll_1Path = '/gestiondestock/v1/articles/all';
  static readonly save_1Path = '/gestiondestock/v1/articles/create';
  static readonly findHistoriqueCommandeFournisseurPath = '/gestiondestock/v1/articles/historique/commandeFournisseur/{idArticle}';
  static readonly findHistoriqueCommandeClientPath = '/gestiondestock/v1/articles/historique/commandeclient/{idArticle}';
  static readonly findHistoriqueVentesPath = '/gestiondestock/v1/articles/historique/vente/{idArticle}';
  static readonly findById_2Path = '/gestiondestock/v1/articles/idArticles';
  static readonly findAll_2Path = '/gestiondestock/v1/category/all';
  static readonly deletePath = '/gestiondestock/v1/clients/delete/{idClients}';
  static readonly findById_3Path = '/gestiondestock/v1/clients/idClient';
  static readonly findByNumTelPath = '/gestiondestock/v1/clients/{tel}';
  static readonly findAll_3Path = '/gestiondestock/v1/entreprise/all';
  static readonly findByCodeFiscalPath = '/gestiondestock/v1/entreprise/codefiscal/{codefiscal}';
  static readonly save_2Path = '/gestiondestock/v1/entreprise/create';
  static readonly findById_4Path = '/gestiondestock/v1/entreprise/idEntreprise/idEntreprise';
  static readonly findByNomPath = '/gestiondestock/v1/entreprise/nom/{nom}';
  static readonly save_3Path = '/gestiondestock/v1/fournisseur/create';
  static readonly findAll_4Path = '/gestiondestock/v1/ligneVente/all';
  static readonly delete_1Path = '/gestiondestock/v1/ligneVente/delete/{id}';
  static readonly correctionStockPosPath = '/gestiondestock/v1/mvtStock/correctionPos';
  static readonly entreeStockPath = '/gestiondestock/v1/mvtStock/entrée';
  static readonly stockReelArticlePath = '/gestiondestock/v1/mvtStock/stock/réel/{idArticle}';
  static readonly save_4Path = '/gestiondestock/v1/utilisateurs/create';
  static readonly findAll_5Path = '/gestiondestock/v1/ventes/all';
  static readonly findById_5Path = '/gestiondestock/v1/ventes/{idVentes}';
  static readonly findByEmailPath = '/utilisateurs/email/{email}';
  static readonly findById_6Path = '/utilisateurs/id/{id}';
  static readonly findByNom_1Path = '/utilisateurs/nom/{nom}';
  static readonly findByNumTel_1Path = '/utilisateurs/numTel/{numTel}';
  static readonly authenticatePath = 'gestiondestock/v1/auth/authenticate';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Rechercher une categorie par CODE
   *
   * Cette méthode permet chercher un article par son CODE
   * @param codecategory undefined
   * @return Category a été trouvé dans la Base de donnée
   */
  findByCodeResponse(codecategory: string): __Observable<__StrictHttpResponse<CategoryDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/category/codecategory/${encodeURIComponent(String(codecategory))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CategoryDto>;
      })
    );
  }
  /**
   * Rechercher une categorie par CODE
   *
   * Cette méthode permet chercher un article par son CODE
   * @param codecategory undefined
   * @return Category a été trouvé dans la Base de donnée
   */
  findByCode(codecategory: string): __Observable<CategoryDto> {
    return this.findByCodeResponse(codecategory).pipe(
      __map(_r => _r.body as CategoryDto)
    );
  }

  /**
   * Rechercher une categorie par ID
   *
   * Cette méthode permet chercher une categorie par son ID
   * @param id undefined
   * @return La categorie a été trouvé dans la Base de donnée
   */
  findByIdResponse(id: number): __Observable<__StrictHttpResponse<ArticleDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/category/id/${encodeURIComponent(String(id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ArticleDto>;
      })
    );
  }
  /**
   * Rechercher une categorie par ID
   *
   * Cette méthode permet chercher une categorie par son ID
   * @param id undefined
   * @return La categorie a été trouvé dans la Base de donnée
   */
  findById(id: number): __Observable<ArticleDto> {
    return this.findByIdResponse(id).pipe(
      __map(_r => _r.body as ArticleDto)
    );
  }

  /**
   * @return successful operation
   */
  deleteArticleResponse(): __Observable<__StrictHttpResponse<CommandeClientDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/gestiondestock/v1/CommandeClients/delete/article/${encodeURIComponent(String(idCommande))}/${encodeURIComponent(String(idLigneCommande))}}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeClientDto>;
      })
    );
  }
  /**
   * @return successful operation
   */
  deleteArticle(): __Observable<CommandeClientDto> {
    return this.deleteArticleResponse().pipe(
      __map(_r => _r.body as CommandeClientDto)
    );
  }

  /**
   * @return successful operation
   */
  findAllLigneCommandesClientByCommandeClientIdResponse(): __Observable<__StrictHttpResponse<Array<LigneCommandeClientDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/CommandeClients/ligneCommandes/${encodeURIComponent(String(idCommande))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<LigneCommandeClientDto>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findAllLigneCommandesClientByCommandeClientId(): __Observable<Array<LigneCommandeClientDto>> {
    return this.findAllLigneCommandesClientByCommandeClientIdResponse().pipe(
      __map(_r => _r.body as Array<LigneCommandeClientDto>)
    );
  }

  /**
   * @return successful operation
   */
  updateArticleResponse(): __Observable<__StrictHttpResponse<CommandeClientDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/gestiondestock/v1/CommandeClients/update/article/${encodeURIComponent(String(idCommande))}/${encodeURIComponent(String(idLigneCommande))}/${encodeURIComponent(String(idArticle))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeClientDto>;
      })
    );
  }
  /**
   * @return successful operation
   */
  updateArticle(): __Observable<CommandeClientDto> {
    return this.updateArticleResponse().pipe(
      __map(_r => _r.body as CommandeClientDto)
    );
  }

  /**
   * @return successful operation
   */
  findByCode_1Response(): __Observable<__StrictHttpResponse<CommandeClientDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/CommandeClients/${encodeURIComponent(String(codeCommandeClient))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeClientDto>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findByCode_1(): __Observable<CommandeClientDto> {
    return this.findByCode_1Response().pipe(
      __map(_r => _r.body as CommandeClientDto)
    );
  }

  /**
   * @return successful operation
   */
  findAllResponse(): __Observable<__StrictHttpResponse<Array<CommandeFournisseurDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/CommandeFournisseurs/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<CommandeFournisseurDto>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findAll(): __Observable<Array<CommandeFournisseurDto>> {
    return this.findAllResponse().pipe(
      __map(_r => _r.body as Array<CommandeFournisseurDto>)
    );
  }

  /**
   * @return successful operation
   */
  saveResponse(): __Observable<__StrictHttpResponse<CommandeFournisseurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gestiondestock/v1/CommandeFournisseurs/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeFournisseurDto>;
      })
    );
  }
  /**
   * @return successful operation
   */
  save(): __Observable<CommandeFournisseurDto> {
    return this.saveResponse().pipe(
      __map(_r => _r.body as CommandeFournisseurDto)
    );
  }

  /**
   * @return successful operation
   */
  findAllLigneCommandesFournisseurByCommandeFournisseurIdResponse(): __Observable<__StrictHttpResponse<Array<LigneCommandeFournisseurDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/CommandeFournisseurs/ligneCommandes/${encodeURIComponent(String(idCommande))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<LigneCommandeFournisseurDto>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findAllLigneCommandesFournisseurByCommandeFournisseurId(): __Observable<Array<LigneCommandeFournisseurDto>> {
    return this.findAllLigneCommandesFournisseurByCommandeFournisseurIdResponse().pipe(
      __map(_r => _r.body as Array<LigneCommandeFournisseurDto>)
    );
  }

  /**
   * @return successful operation
   */
  updateEtatCommandeResponse(): __Observable<__StrictHttpResponse<CommandeFournisseurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/gestiondestock/v1/CommandeFournisseurs/update/etat/${encodeURIComponent(String(idCommande))}/${encodeURIComponent(String(etatCommande))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeFournisseurDto>;
      })
    );
  }
  /**
   * @return successful operation
   */
  updateEtatCommande(): __Observable<CommandeFournisseurDto> {
    return this.updateEtatCommandeResponse().pipe(
      __map(_r => _r.body as CommandeFournisseurDto)
    );
  }

  /**
   * @return successful operation
   */
  updateFournisseurResponse(): __Observable<__StrictHttpResponse<CommandeFournisseurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/gestiondestock/v1/CommandeFournisseurs/update/fournisseur/${encodeURIComponent(String(idCommande))}/${encodeURIComponent(String(idClient))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeFournisseurDto>;
      })
    );
  }
  /**
   * @return successful operation
   */
  updateFournisseur(): __Observable<CommandeFournisseurDto> {
    return this.updateFournisseurResponse().pipe(
      __map(_r => _r.body as CommandeFournisseurDto)
    );
  }

  /**
   * @return successful operation
   */
  findByCode_2Response(): __Observable<__StrictHttpResponse<CommandeFournisseurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/CommandeFournisseurs/${encodeURIComponent(String(codeCommandeFournisseur))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeFournisseurDto>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findByCode_2(): __Observable<CommandeFournisseurDto> {
    return this.findByCode_2Response().pipe(
      __map(_r => _r.body as CommandeFournisseurDto)
    );
  }

  /**
   * @return successful operation
   */
  findById_1Response(): __Observable<__StrictHttpResponse<CommandeFournisseurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/CommandeFournisseurs/${encodeURIComponent(String(idCommandeFournisseur))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeFournisseurDto>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findById_1(): __Observable<CommandeFournisseurDto> {
    return this.findById_1Response().pipe(
      __map(_r => _r.body as CommandeFournisseurDto)
    );
  }

  /**
   * Renvoie la liste des articles
   *
   * Cette méthode permet chercher et renvoyer la liste des article qui existe dans la BDD
   * @return La liste des article / Une liste vide
   */
  findAll_1Response(): __Observable<__StrictHttpResponse<Array<ArticleDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/articles/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ArticleDto>>;
      })
    );
  }
  /**
   * Renvoie la liste des articles
   *
   * Cette méthode permet chercher et renvoyer la liste des article qui existe dans la BDD
   * @return La liste des article / Une liste vide
   */
  findAll_1(): __Observable<Array<ArticleDto>> {
    return this.findAll_1Response().pipe(
      __map(_r => _r.body as Array<ArticleDto>)
    );
  }

  /**
   * Enregistrer un article
   *
   * Cette méthode permet (Ajouter / Modifier) un article
   * @return L'objet article cree / modifie
   */
  save_1Response(): __Observable<__StrictHttpResponse<ArticleDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gestiondestock/v1/articles/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ArticleDto>;
      })
    );
  }
  /**
   * Enregistrer un article
   *
   * Cette méthode permet (Ajouter / Modifier) un article
   * @return L'objet article cree / modifie
   */
  save_1(): __Observable<ArticleDto> {
    return this.save_1Response().pipe(
      __map(_r => _r.body as ArticleDto)
    );
  }

  /**
   * Renvoie l'istorique des commandes fournisseur
   *
   * Cette méthode permet chercher et renvoyer l'istorique des commandes fournisseur qui existe dans la BDD
   * @return L'istorique des commandes fournisseur vide
   */
  findHistoriqueCommandeFournisseurResponse(): __Observable<__StrictHttpResponse<Array<LigneCommandeFournisseurDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/articles/historique/commandeFournisseur/${encodeURIComponent(String(idArticle))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<LigneCommandeFournisseurDto>>;
      })
    );
  }
  /**
   * Renvoie l'istorique des commandes fournisseur
   *
   * Cette méthode permet chercher et renvoyer l'istorique des commandes fournisseur qui existe dans la BDD
   * @return L'istorique des commandes fournisseur vide
   */
  findHistoriqueCommandeFournisseur(): __Observable<Array<LigneCommandeFournisseurDto>> {
    return this.findHistoriqueCommandeFournisseurResponse().pipe(
      __map(_r => _r.body as Array<LigneCommandeFournisseurDto>)
    );
  }

  /**
   * Renvoie l'istorique des commandes clients
   *
   * Cette méthode permet chercher et renvoyer l'istorique des commandes clients qui existe dans la BDD
   * @return L'istorique des commandes clients vide
   */
  findHistoriqueCommandeClientResponse(): __Observable<__StrictHttpResponse<Array<LigneCommandeClientDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/articles/historique/commandeclient/${encodeURIComponent(String(idArticle))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<LigneCommandeClientDto>>;
      })
    );
  }
  /**
   * Renvoie l'istorique des commandes clients
   *
   * Cette méthode permet chercher et renvoyer l'istorique des commandes clients qui existe dans la BDD
   * @return L'istorique des commandes clients vide
   */
  findHistoriqueCommandeClient(): __Observable<Array<LigneCommandeClientDto>> {
    return this.findHistoriqueCommandeClientResponse().pipe(
      __map(_r => _r.body as Array<LigneCommandeClientDto>)
    );
  }

  /**
   * Renvoie l'historique des ventes
   *
   * Cette méthode permet de chercher l'historique des ventes
   * @return L'historique des ventes vide
   */
  findHistoriqueVentesResponse(): __Observable<__StrictHttpResponse<Array<LigneVenteDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/articles/historique/vente/${encodeURIComponent(String(idArticle))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<LigneVenteDto>>;
      })
    );
  }
  /**
   * Renvoie l'historique des ventes
   *
   * Cette méthode permet de chercher l'historique des ventes
   * @return L'historique des ventes vide
   */
  findHistoriqueVentes(): __Observable<Array<LigneVenteDto>> {
    return this.findHistoriqueVentesResponse().pipe(
      __map(_r => _r.body as Array<LigneVenteDto>)
    );
  }

  /**
   * Rechercher un article par ID
   *
   * Cette méthode permet chercher un article par son ID
   * @return Article a été trouvé dans la Base de donnée
   */
  findById_2Response(): __Observable<__StrictHttpResponse<ArticleDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/articles/idArticles`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ArticleDto>;
      })
    );
  }
  /**
   * Rechercher un article par ID
   *
   * Cette méthode permet chercher un article par son ID
   * @return Article a été trouvé dans la Base de donnée
   */
  findById_2(): __Observable<ArticleDto> {
    return this.findById_2Response().pipe(
      __map(_r => _r.body as ArticleDto)
    );
  }

  /**
   * Renvoie la liste des categories
   *
   * Cette méthode permet chercher et renvoyer la liste des article qui existe dans la BDD
   * @return La liste des categorie / Une liste vide
   */
  findAll_2Response(): __Observable<__StrictHttpResponse<Array<CategoryDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/category/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<CategoryDto>>;
      })
    );
  }
  /**
   * Renvoie la liste des categories
   *
   * Cette méthode permet chercher et renvoyer la liste des article qui existe dans la BDD
   * @return La liste des categorie / Une liste vide
   */
  findAll_2(): __Observable<Array<CategoryDto>> {
    return this.findAll_2Response().pipe(
      __map(_r => _r.body as Array<CategoryDto>)
    );
  }
  deleteResponse(): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/gestiondestock/v1/clients/delete/${encodeURIComponent(String(idClients))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }  delete(): __Observable<null> {
    return this.deleteResponse().pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @return successful operation
   */
  findById_3Response(): __Observable<__StrictHttpResponse<ClientDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/clients/idClient`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ClientDto>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findById_3(): __Observable<ClientDto> {
    return this.findById_3Response().pipe(
      __map(_r => _r.body as ClientDto)
    );
  }

  /**
   * @return successful operation
   */
  findByNumTelResponse(): __Observable<__StrictHttpResponse<ClientDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/clients/${encodeURIComponent(String(tel))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ClientDto>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findByNumTel(): __Observable<ClientDto> {
    return this.findByNumTelResponse().pipe(
      __map(_r => _r.body as ClientDto)
    );
  }

  /**
   * @return successful operation
   */
  findAll_3Response(): __Observable<__StrictHttpResponse<Array<EntrepriseDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/entreprise/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<EntrepriseDto>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findAll_3(): __Observable<Array<EntrepriseDto>> {
    return this.findAll_3Response().pipe(
      __map(_r => _r.body as Array<EntrepriseDto>)
    );
  }

  /**
   * @return successful operation
   */
  findByCodeFiscalResponse(): __Observable<__StrictHttpResponse<EntrepriseDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/entreprise/codefiscal/${encodeURIComponent(String(codefiscal))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EntrepriseDto>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findByCodeFiscal(): __Observable<EntrepriseDto> {
    return this.findByCodeFiscalResponse().pipe(
      __map(_r => _r.body as EntrepriseDto)
    );
  }

  /**
   * @return successful operation
   */
  save_2Response(): __Observable<__StrictHttpResponse<EntrepriseDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gestiondestock/v1/entreprise/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EntrepriseDto>;
      })
    );
  }
  /**
   * @return successful operation
   */
  save_2(): __Observable<EntrepriseDto> {
    return this.save_2Response().pipe(
      __map(_r => _r.body as EntrepriseDto)
    );
  }

  /**
   * @return successful operation
   */
  findById_4Response(): __Observable<__StrictHttpResponse<EntrepriseDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/entreprise/idEntreprise/idEntreprise`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EntrepriseDto>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findById_4(): __Observable<EntrepriseDto> {
    return this.findById_4Response().pipe(
      __map(_r => _r.body as EntrepriseDto)
    );
  }

  /**
   * @return successful operation
   */
  findByNomResponse(): __Observable<__StrictHttpResponse<EntrepriseDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/entreprise/nom/${encodeURIComponent(String(nom))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EntrepriseDto>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findByNom(): __Observable<EntrepriseDto> {
    return this.findByNomResponse().pipe(
      __map(_r => _r.body as EntrepriseDto)
    );
  }

  /**
   * @return successful operation
   */
  save_3Response(): __Observable<__StrictHttpResponse<FournisseurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gestiondestock/v1/fournisseur/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<FournisseurDto>;
      })
    );
  }
  /**
   * @return successful operation
   */
  save_3(): __Observable<FournisseurDto> {
    return this.save_3Response().pipe(
      __map(_r => _r.body as FournisseurDto)
    );
  }

  /**
   * @return successful operation
   */
  findAll_4Response(): __Observable<__StrictHttpResponse<Array<LigneVenteDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/ligneVente/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<LigneVenteDto>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findAll_4(): __Observable<Array<LigneVenteDto>> {
    return this.findAll_4Response().pipe(
      __map(_r => _r.body as Array<LigneVenteDto>)
    );
  }
  delete_1Response(): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/gestiondestock/v1/ligneVente/delete/${encodeURIComponent(String(id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }  delete_1(): __Observable<null> {
    return this.delete_1Response().pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @return successful operation
   */
  correctionStockPosResponse(): __Observable<__StrictHttpResponse<MvtStockDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gestiondestock/v1/mvtStock/correctionPos`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<MvtStockDto>;
      })
    );
  }
  /**
   * @return successful operation
   */
  correctionStockPos(): __Observable<MvtStockDto> {
    return this.correctionStockPosResponse().pipe(
      __map(_r => _r.body as MvtStockDto)
    );
  }

  /**
   * @return successful operation
   */
  entreeStockResponse(): __Observable<__StrictHttpResponse<MvtStockDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gestiondestock/v1/mvtStock/entrée`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<MvtStockDto>;
      })
    );
  }
  /**
   * @return successful operation
   */
  entreeStock(): __Observable<MvtStockDto> {
    return this.entreeStockResponse().pipe(
      __map(_r => _r.body as MvtStockDto)
    );
  }

  /**
   * @return successful operation
   */
  stockReelArticleResponse(): __Observable<__StrictHttpResponse<number>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/mvtStock/stock/réel/${encodeURIComponent(String(idArticle))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return (_r as HttpResponse<any>).clone({ body: parseFloat((_r as HttpResponse<any>).body as string) }) as __StrictHttpResponse<number>
      })
    );
  }
  /**
   * @return successful operation
   */
  stockReelArticle(): __Observable<number> {
    return this.stockReelArticleResponse().pipe(
      __map(_r => _r.body as number)
    );
  }

  /**
   * @return successful operation
   */
  save_4Response(): __Observable<__StrictHttpResponse<UtilisateurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gestiondestock/v1/utilisateurs/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UtilisateurDto>;
      })
    );
  }
  /**
   * @return successful operation
   */
  save_4(): __Observable<UtilisateurDto> {
    return this.save_4Response().pipe(
      __map(_r => _r.body as UtilisateurDto)
    );
  }

  /**
   * @return successful operation
   */
  findAll_5Response(): __Observable<__StrictHttpResponse<Array<VentesDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/ventes/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<VentesDto>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findAll_5(): __Observable<Array<VentesDto>> {
    return this.findAll_5Response().pipe(
      __map(_r => _r.body as Array<VentesDto>)
    );
  }

  /**
   * @return successful operation
   */
  findById_5Response(): __Observable<__StrictHttpResponse<VentesDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/ventes/${encodeURIComponent(String(idVentes))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<VentesDto>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findById_5(): __Observable<VentesDto> {
    return this.findById_5Response().pipe(
      __map(_r => _r.body as VentesDto)
    );
  }

  /**
   * Rechercher un utilisateur par EMAIL
   *
   * Cette méthode permet chercher un utilisateur par son EMAIL
   * @param email undefined
   * @return utilisateur a été trouvé dans la Base de donnée
   */
  findByEmailResponse(email: string): __Observable<__StrictHttpResponse<ArticleDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/utilisateurs/email/${encodeURIComponent(String(email))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ArticleDto>;
      })
    );
  }
  /**
   * Rechercher un utilisateur par EMAIL
   *
   * Cette méthode permet chercher un utilisateur par son EMAIL
   * @param email undefined
   * @return utilisateur a été trouvé dans la Base de donnée
   */
  findByEmail(email: string): __Observable<ArticleDto> {
    return this.findByEmailResponse(email).pipe(
      __map(_r => _r.body as ArticleDto)
    );
  }

  /**
   * @param id undefined
   * @return successful operation
   */
  findById_6Response(id: number): __Observable<__StrictHttpResponse<UtilisateurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/utilisateurs/id/${encodeURIComponent(String(id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UtilisateurDto>;
      })
    );
  }
  /**
   * @param id undefined
   * @return successful operation
   */
  findById_6(id: number): __Observable<UtilisateurDto> {
    return this.findById_6Response(id).pipe(
      __map(_r => _r.body as UtilisateurDto)
    );
  }

  /**
   * @param nom undefined
   * @return successful operation
   */
  findByNom_1Response(nom: string): __Observable<__StrictHttpResponse<UtilisateurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/utilisateurs/nom/${encodeURIComponent(String(nom))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UtilisateurDto>;
      })
    );
  }
  /**
   * @param nom undefined
   * @return successful operation
   */
  findByNom_1(nom: string): __Observable<UtilisateurDto> {
    return this.findByNom_1Response(nom).pipe(
      __map(_r => _r.body as UtilisateurDto)
    );
  }

  /**
   * @param numTel undefined
   * @return successful operation
   */
  findByNumTel_1Response(numTel: string): __Observable<__StrictHttpResponse<UtilisateurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/utilisateurs/numTel/${encodeURIComponent(String(numTel))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UtilisateurDto>;
      })
    );
  }
  /**
   * @param numTel undefined
   * @return successful operation
   */
  findByNumTel_1(numTel: string): __Observable<UtilisateurDto> {
    return this.findByNumTel_1Response(numTel).pipe(
      __map(_r => _r.body as UtilisateurDto)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  authenticateResponse(body?: AuthenticationRequest): __Observable<__StrictHttpResponse<AuthenticationResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `gestiondestock/v1/auth/authenticate`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AuthenticationResponse>;
      })
    );
  }
  /**
   * @param body undefined
   * @return successful operation
   */
  authenticate(body?: AuthenticationRequest): __Observable<AuthenticationResponse> {
    return this.authenticateResponse(body).pipe(
      __map(_r => _r.body as AuthenticationResponse)
    );
  }
}

module ApiService {
}

export { ApiService }
