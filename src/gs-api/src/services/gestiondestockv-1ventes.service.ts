/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { VentesDto } from '../models/ventes-dto';
@Injectable({
  providedIn: 'root',
})
class Gestiondestockv1ventesService extends __BaseService {
  static readonly savePath = '/gestiondestock/v1/ventes/create';
  static readonly deletePath = '/gestiondestock/v1/ventes/delete/{idVentes}';
  static readonly findByCodePath = '/gestiondestock/v1/ventes/{code}';

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
  saveResponse(body?: VentesDto): __Observable<__StrictHttpResponse<VentesDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gestiondestock/v1/ventes/create`,
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
   * @param body undefined
   * @return successful operation
   */
  save(body?: VentesDto): __Observable<VentesDto> {
    return this.saveResponse(body).pipe(
      __map(_r => _r.body as VentesDto)
    );
  }

  /**
   * @param idVentes undefined
   */
  deleteResponse(idVentes: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/gestiondestock/v1/ventes/delete/${encodeURIComponent(String(idVentes))}`,
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
   * @param idVentes undefined
   */
  delete(idVentes: number): __Observable<null> {
    return this.deleteResponse(idVentes).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @return successful operation
   */
  findByCodeResponse(): __Observable<__StrictHttpResponse<VentesDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/ventes/${encodeURIComponent(String(code))}`,
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
  findByCode(): __Observable<VentesDto> {
    return this.findByCodeResponse().pipe(
      __map(_r => _r.body as VentesDto)
    );
  }
}

module Gestiondestockv1ventesService {
}

export { Gestiondestockv1ventesService }
