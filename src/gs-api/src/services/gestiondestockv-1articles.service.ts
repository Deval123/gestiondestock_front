/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ArticleDto } from '../models/article-dto';
@Injectable({
  providedIn: 'root',
})
class Gestiondestockv1articlesService extends __BaseService {
  static readonly deletePath = '/gestiondestock/v1/articles/delete/{idArticle}';
  static readonly findArticleByIdCategoryPath = '/gestiondestock/v1/articles/filtre/category/{idCategory}';
  static readonly findByCodeArticlePath = '/gestiondestock/v1/articles/filtre/{codeArticle}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Supprimer un article
   *
   * Cette méthode permet de supprimer un article par son ID
   * @param idArticles undefined
   */
  deleteResponse(idArticles: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/gestiondestock/v1/articles/delete/${encodeURIComponent(String(idArticle))}`,
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
   * Supprimer un article
   *
   * Cette méthode permet de supprimer un article par son ID
   * @param idArticles undefined
   */
  delete(idArticles: number): __Observable<null> {
    return this.deleteResponse(idArticles).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Filtre les articles en fonction de la categorie
   *
   * Cette méthode permet filtrer les articles en fonction de la categorie
   * @param idCategory undefined
   * @return La liste des article / Une liste vide
   */
  findArticleByIdCategoryResponse(idCategory: number): __Observable<__StrictHttpResponse<Array<ArticleDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/articles/filtre/category/${encodeURIComponent(String(idCategory))}`,
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
   * Filtre les articles en fonction de la categorie
   *
   * Cette méthode permet filtrer les articles en fonction de la categorie
   * @param idCategory undefined
   * @return La liste des article / Une liste vide
   */
  findArticleByIdCategory(idCategory: number): __Observable<Array<ArticleDto>> {
    return this.findArticleByIdCategoryResponse(idCategory).pipe(
      __map(_r => _r.body as Array<ArticleDto>)
    );
  }

  /**
   * Rechercher un article par CODE
   *
   * Cette méthode permet chercher un article par son CODE
   * @param codeArticle undefined
   * @return Article a été trouvé dans la Base de donnée
   */
  findByCodeArticleResponse(codeArticle: string): __Observable<__StrictHttpResponse<ArticleDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/articles/filtre/${encodeURIComponent(String(codeArticle))}`,
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
   * Rechercher un article par CODE
   *
   * Cette méthode permet chercher un article par son CODE
   * @param codeArticle undefined
   * @return Article a été trouvé dans la Base de donnée
   */
  findByCodeArticle(codeArticle: string): __Observable<ArticleDto> {
    return this.findByCodeArticleResponse(codeArticle).pipe(
      __map(_r => _r.body as ArticleDto)
    );
  }
}

module Gestiondestockv1articlesService {
}

export { Gestiondestockv1articlesService }
