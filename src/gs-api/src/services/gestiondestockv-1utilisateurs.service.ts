/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { UtilisateurDto } from '../models/utilisateur-dto';
import { ArticleDto } from '../models/article-dto';
@Injectable({
  providedIn: 'root',
})
class Gestiondestockv1utilisateursService extends __BaseService {
  static readonly findAllPath = '/gestiondestock/v1/utilisateurs/all';
  static readonly deletePath = '/gestiondestock/v1/utilisateurs/delete/{idUtilisateurs}';
  static readonly findByEmailPath = '/gestiondestock/v1/utilisateurs/{emailUtilisateurs}';
  static readonly findByIdPath = '/gestiondestock/v1/utilisateurs/{idUtilisateurs}';
  static readonly findByNomPath = '/gestiondestock/v1/utilisateurs/{nomUtilisateurs}';
  static readonly findByNumTelPath = '/gestiondestock/v1/utilisateurs/{numTelUtilisateurs}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return successful operation
   */
  findAllResponse(): __Observable<__StrictHttpResponse<Array<UtilisateurDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/utilisateurs/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<UtilisateurDto>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findAll(): __Observable<Array<UtilisateurDto>> {
    return this.findAllResponse().pipe(
      __map(_r => _r.body as Array<UtilisateurDto>)
    );
  }

  /**
   * @param idUtilisateur undefined
   */
  deleteResponse(idUtilisateur: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/gestiondestock/v1/utilisateurs/delete/${encodeURIComponent(String(idUtilisateurs))}`,
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
   * @param idUtilisateur undefined
   */
  delete(idUtilisateur: number): __Observable<null> {
    return this.deleteResponse(idUtilisateur).pipe(
      __map(_r => _r.body as null)
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
      this.rootUrl + `/gestiondestock/v1/utilisateurs/${encodeURIComponent(String(emailUtilisateurs))}`,
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
   * @param idUtilisateur undefined
   * @return successful operation
   */
  findByIdResponse(idUtilisateur: number): __Observable<__StrictHttpResponse<UtilisateurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/utilisateurs/${encodeURIComponent(String(idUtilisateurs))}`,
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
   * @param idUtilisateur undefined
   * @return successful operation
   */
  findById(idUtilisateur: number): __Observable<UtilisateurDto> {
    return this.findByIdResponse(idUtilisateur).pipe(
      __map(_r => _r.body as UtilisateurDto)
    );
  }

  /**
   * @param nom undefined
   * @return successful operation
   */
  findByNomResponse(nom: string): __Observable<__StrictHttpResponse<UtilisateurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/utilisateurs/${encodeURIComponent(String(nomUtilisateurs))}`,
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
  findByNom(nom: string): __Observable<UtilisateurDto> {
    return this.findByNomResponse(nom).pipe(
      __map(_r => _r.body as UtilisateurDto)
    );
  }

  /**
   * @param numTel undefined
   * @return successful operation
   */
  findByNumTelResponse(numTel: string): __Observable<__StrictHttpResponse<UtilisateurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/utilisateurs/${encodeURIComponent(String(numTelUtilisateurs))}`,
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
  findByNumTel(numTel: string): __Observable<UtilisateurDto> {
    return this.findByNumTelResponse(numTel).pipe(
      __map(_r => _r.body as UtilisateurDto)
    );
  }
}

module Gestiondestockv1utilisateursService {
}

export { Gestiondestockv1utilisateursService }
