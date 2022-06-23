/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { EntrepriseDto } from '../models/entreprise-dto';
@Injectable({
  providedIn: 'root',
})
class Gestiondestockv1entrepriseService extends __BaseService {
  static readonly deletePath = '/gestiondestock/v1/entreprise/delete/{idEntreprise}';
  static readonly findByNumTelPath = '/gestiondestock/v1/entreprise/tel/{tel}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param idEntreprise undefined
   */
  deleteResponse(idEntreprise: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/gestiondestock/v1/entreprise/delete/${encodeURIComponent(String(idEntreprise))}`,
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
   * @param idEntreprise undefined
   */
  delete(idEntreprise: number): __Observable<null> {
    return this.deleteResponse(idEntreprise).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param tel undefined
   * @return successful operation
   */
  findByNumTelResponse(tel: string): __Observable<__StrictHttpResponse<EntrepriseDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/entreprise/tel/${encodeURIComponent(String(tel))}`,
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
   * @param tel undefined
   * @return successful operation
   */
  findByNumTel(tel: string): __Observable<EntrepriseDto> {
    return this.findByNumTelResponse(tel).pipe(
      __map(_r => _r.body as EntrepriseDto)
    );
  }
}

module Gestiondestockv1entrepriseService {
}

export { Gestiondestockv1entrepriseService }
