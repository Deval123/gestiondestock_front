/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { MvtStockDto } from '../models/mvt-stock-dto';
@Injectable({
  providedIn: 'root',
})
class Gestiondestockv1mvtStockService extends __BaseService {
  static readonly correctionStockNegPath = '/gestiondestock/v1/mvtStock/correctionNeg';
  static readonly mvtStockArticlePath = '/gestiondestock/v1/mvtStock/filtre/article/{idArticle}';
  static readonly sortieStockPath = '/gestiondestock/v1/mvtStock/sortie';

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
  correctionStockNegResponse(body?: MvtStockDto): __Observable<__StrictHttpResponse<MvtStockDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gestiondestock/v1/mvtStock/correctionNeg`,
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
   * @param body undefined
   * @return successful operation
   */
  correctionStockNeg(body?: MvtStockDto): __Observable<MvtStockDto> {
    return this.correctionStockNegResponse(body).pipe(
      __map(_r => _r.body as MvtStockDto)
    );
  }

  /**
   * @param idArticle undefined
   * @return successful operation
   */
  mvtStockArticleResponse(idArticle: number): __Observable<__StrictHttpResponse<Array<MvtStockDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/mvtStock/filtre/article/${encodeURIComponent(String(idArticle))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<MvtStockDto>>;
      })
    );
  }
  /**
   * @param idArticle undefined
   * @return successful operation
   */
  mvtStockArticle(idArticle: number): __Observable<Array<MvtStockDto>> {
    return this.mvtStockArticleResponse(idArticle).pipe(
      __map(_r => _r.body as Array<MvtStockDto>)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  sortieStockResponse(body?: MvtStockDto): __Observable<__StrictHttpResponse<MvtStockDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gestiondestock/v1/mvtStock/sortie`,
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
   * @param body undefined
   * @return successful operation
   */
  sortieStock(body?: MvtStockDto): __Observable<MvtStockDto> {
    return this.sortieStockResponse(body).pipe(
      __map(_r => _r.body as MvtStockDto)
    );
  }
}

module Gestiondestockv1mvtStockService {
}

export { Gestiondestockv1mvtStockService }
