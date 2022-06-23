/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { FournisseurDto } from '../models/fournisseur-dto';
@Injectable({
  providedIn: 'root',
})
class Gestiondestockv1fournisseursService extends __BaseService {
  static readonly findAllPath = '/gestiondestock/v1/fournisseur/all';
  static readonly deletePath = '/gestiondestock/v1/fournisseur/delete/{idFournisseur}';
  static readonly findByIdPath = '/gestiondestock/v1/fournisseur/idFournisseur';
  static readonly findByNomPath = '/gestiondestock/v1/fournisseur/{nom}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return successful operation
   */
  findAllResponse(): __Observable<__StrictHttpResponse<Array<FournisseurDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/fournisseur/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<FournisseurDto>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findAll(): __Observable<Array<FournisseurDto>> {
    return this.findAllResponse().pipe(
      __map(_r => _r.body as Array<FournisseurDto>)
    );
  }
  deleteResponse(): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/gestiondestock/v1/fournisseur/delete/${encodeURIComponent(String(idFournisseur))}`,
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
   * @param idFournisseur undefined
   * @return successful operation
   */
  findByIdResponse(idFournisseur: number): __Observable<__StrictHttpResponse<FournisseurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/fournisseur/idFournisseur`,
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
   * @param idFournisseur undefined
   * @return successful operation
   */
  findById(idFournisseur: number): __Observable<FournisseurDto> {
    return this.findByIdResponse(idFournisseur).pipe(
      __map(_r => _r.body as FournisseurDto)
    );
  }

  /**
   * @param nom undefined
   * @return successful operation
   */
  findByNomResponse(nom: string): __Observable<__StrictHttpResponse<FournisseurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/fournisseur/${encodeURIComponent(String(nom))}`,
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
   * @param nom undefined
   * @return successful operation
   */
  findByNom(nom: string): __Observable<FournisseurDto> {
    return this.findByNomResponse(nom).pipe(
      __map(_r => _r.body as FournisseurDto)
    );
  }
}

module Gestiondestockv1fournisseursService {
}

export { Gestiondestockv1fournisseursService }
