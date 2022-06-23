/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { CommandeFournisseurDto } from '../models/commande-fournisseur-dto';
@Injectable({
  providedIn: 'root',
})
class Gestiondestockv1CommandeFournisseursService extends __BaseService {
  static readonly deleteArticlePath = '/gestiondestock/v1/CommandeFournisseurs/delete/article/{idCommande}/{idLigneCommande}}';
  static readonly deletePath = '/gestiondestock/v1/CommandeFournisseurs/delete/{idCommandeFournisseur}';
  static readonly updateArticlePath = '/gestiondestock/v1/CommandeFournisseurs/update/article/{idCommande}/{idLigneCommande}/{idArticle}';
  static readonly updateQuantiteCommandePath = '/gestiondestock/v1/CommandeFournisseurs/update/quantite/{idCommande}/{idLigneCommande}/{quantite}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param params The `Gestiondestockv1CommandeFournisseursService.DeleteArticleParams` containing the following parameters:
   *
   * - `idLigneCommande`:
   *
   * - `idCommande`:
   *
   * @return successful operation
   */
  deleteArticleResponse(params: Gestiondestockv1CommandeFournisseursService.DeleteArticleParams): __Observable<__StrictHttpResponse<CommandeFournisseurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/gestiondestock/v1/CommandeFournisseurs/delete/article/${encodeURIComponent(String(params.idCommande))}/${encodeURIComponent(String(params.idLigneCommande))}}`,
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
   * @param params The `Gestiondestockv1CommandeFournisseursService.DeleteArticleParams` containing the following parameters:
   *
   * - `idLigneCommande`:
   *
   * - `idCommande`:
   *
   * @return successful operation
   */
  deleteArticle(params: Gestiondestockv1CommandeFournisseursService.DeleteArticleParams): __Observable<CommandeFournisseurDto> {
    return this.deleteArticleResponse(params).pipe(
      __map(_r => _r.body as CommandeFournisseurDto)
    );
  }

  /**
   * @param idCommandeFournisseur undefined
   */
  deleteResponse(idCommandeFournisseur: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/gestiondestock/v1/CommandeFournisseurs/delete/${encodeURIComponent(String(idCommandeFournisseur))}`,
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
  }
  /**
   * @param idCommandeFournisseur undefined
   */
  delete(idCommandeFournisseur: number): __Observable<null> {
    return this.deleteResponse(idCommandeFournisseur).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `Gestiondestockv1CommandeFournisseursService.UpdateArticleParams` containing the following parameters:
   *
   * - `idLigneCommande`:
   *
   * - `idCommande`:
   *
   * - `idArticle`:
   *
   * @return successful operation
   */
  updateArticleResponse(params: Gestiondestockv1CommandeFournisseursService.UpdateArticleParams): __Observable<__StrictHttpResponse<CommandeFournisseurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;



    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/gestiondestock/v1/CommandeFournisseurs/update/article/${encodeURIComponent(String(params.idCommande))}/${encodeURIComponent(String(params.idLigneCommande))}/${encodeURIComponent(String(params.idArticle))}`,
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
   * @param params The `Gestiondestockv1CommandeFournisseursService.UpdateArticleParams` containing the following parameters:
   *
   * - `idLigneCommande`:
   *
   * - `idCommande`:
   *
   * - `idArticle`:
   *
   * @return successful operation
   */
  updateArticle(params: Gestiondestockv1CommandeFournisseursService.UpdateArticleParams): __Observable<CommandeFournisseurDto> {
    return this.updateArticleResponse(params).pipe(
      __map(_r => _r.body as CommandeFournisseurDto)
    );
  }

  /**
   * @param params The `Gestiondestockv1CommandeFournisseursService.UpdateQuantiteCommandeParams` containing the following parameters:
   *
   * - `quantite`:
   *
   * - `idLigneCommande`:
   *
   * - `idCommande`:
   *
   * @return successful operation
   */
  updateQuantiteCommandeResponse(params: Gestiondestockv1CommandeFournisseursService.UpdateQuantiteCommandeParams): __Observable<__StrictHttpResponse<CommandeFournisseurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;



    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/gestiondestock/v1/CommandeFournisseurs/update/quantite/${encodeURIComponent(String(params.idCommande))}/${encodeURIComponent(String(params.idLigneCommande))}/${encodeURIComponent(String(params.quantite))}`,
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
   * @param params The `Gestiondestockv1CommandeFournisseursService.UpdateQuantiteCommandeParams` containing the following parameters:
   *
   * - `quantite`:
   *
   * - `idLigneCommande`:
   *
   * - `idCommande`:
   *
   * @return successful operation
   */
  updateQuantiteCommande(params: Gestiondestockv1CommandeFournisseursService.UpdateQuantiteCommandeParams): __Observable<CommandeFournisseurDto> {
    return this.updateQuantiteCommandeResponse(params).pipe(
      __map(_r => _r.body as CommandeFournisseurDto)
    );
  }
}

module Gestiondestockv1CommandeFournisseursService {

  /**
   * Parameters for deleteArticle
   */
  export interface DeleteArticleParams {
    idLigneCommande: number;
    idCommande: number;
  }

  /**
   * Parameters for updateArticle
   */
  export interface UpdateArticleParams {
    idLigneCommande: number;
    idCommande: number;
    idArticle: number;
  }

  /**
   * Parameters for updateQuantiteCommande
   */
  export interface UpdateQuantiteCommandeParams {
    quantite: number;
    idLigneCommande: number;
    idCommande: number;
  }
}

export { Gestiondestockv1CommandeFournisseursService }
