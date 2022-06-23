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
@Injectable({
  providedIn: 'root',
})
class Gestiondestockv1categoryService extends __BaseService {
  static readonly savePath = '/gestiondestock/v1/category/create';
  static readonly deletePath = '/gestiondestock/v1/category/delete/{idCategory}';
  static readonly findByCodePath = '/gestiondestock/v1/category/{codecategory}';
  static readonly findByIdPath = '/gestiondestock/v1/category/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Enregistrer une categorie
   *
   * Cette méthode permet (Ajouter / Modifier) une categorie
   * @param body undefined
   * @return L'objet categorie cree / modifie
   */
  saveResponse(body?: CategoryDto): __Observable<__StrictHttpResponse<CategoryDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gestiondestock/v1/category/create`,
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
   * Enregistrer une categorie
   *
   * Cette méthode permet (Ajouter / Modifier) une categorie
   * @param body undefined
   * @return L'objet categorie cree / modifie
   */
  save(body?: CategoryDto): __Observable<CategoryDto> {
    return this.saveResponse(body).pipe(
      __map(_r => _r.body as CategoryDto)
    );
  }

  /**
   * Supprimer une categorie
   *
   * Cette méthode permet de supprimer un article par son ID
   * @param idCategory undefined
   */
  deleteResponse(idCategory: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/gestiondestock/v1/category/delete/${encodeURIComponent(String(idCategory))}`,
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
   * Supprimer une categorie
   *
   * Cette méthode permet de supprimer un article par son ID
   * @param idCategory undefined
   */
  delete(idCategory: number): __Observable<null> {
    return this.deleteResponse(idCategory).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Rechercher une categorie par CODE
   *
   * Cette méthode permet chercher un article par son CODE
   * @param codecategory Accepted values [CAT1 CAT2 CAT3 CAT4 ....]
   * @return Category a été trouvé dans la Base de donnée
   */
  findByCodeResponse(codecategory: string): __Observable<__StrictHttpResponse<CategoryDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/category/${encodeURIComponent(String(codecategory))}`,
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
   * @param codecategory Accepted values [CAT1 CAT2 CAT3 CAT4 ....]
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
      this.rootUrl + `/gestiondestock/v1/category/${encodeURIComponent(String(id))}`,
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
}

module Gestiondestockv1categoryService {
}

export { Gestiondestockv1categoryService }
