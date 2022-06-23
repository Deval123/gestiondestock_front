/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { LigneVenteDto } from '../models/ligne-vente-dto';
@Injectable({
  providedIn: 'root',
})
class Gestiondestockv1ligneVenteService extends __BaseService {
  static readonly savePath = '/gestiondestock/v1/ligneVente/create';
  static readonly findByIdPath = '/gestiondestock/v1/ligneVente/idLigneVente';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  saveResponse(body?: LigneVenteDto): __Observable<__StrictHttpResponse<LigneVenteDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gestiondestock/v1/ligneVente/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<LigneVenteDto>;
      })
    );
  }
  /**
   * @param body undefined
   * @return successful operation
   */
  save(body?: LigneVenteDto): __Observable<LigneVenteDto> {
    return this.saveResponse(body).pipe(
      __map(_r => _r.body as LigneVenteDto)
    );
  }

  /**
   * @param idLigneVente undefined
   * @return successful operation
   */
  findByIdResponse(idLigneVente: number): __Observable<__StrictHttpResponse<LigneVenteDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/ligneVente/idLigneVente`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<LigneVenteDto>;
      })
    );
  }
  /**
   * @param idLigneVente undefined
   * @return successful operation
   */
  findById(idLigneVente: number): __Observable<LigneVenteDto> {
    return this.findByIdResponse(idLigneVente).pipe(
      __map(_r => _r.body as LigneVenteDto)
    );
  }
}

module Gestiondestockv1ligneVenteService {
}

export { Gestiondestockv1ligneVenteService }
