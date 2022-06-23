/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
class Gestiondestockv1photosService extends __BaseService {
  static readonly savePhotoPath = '/gestiondestock/v1/photos/{id}/{title}/{context}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param file undefined
   * @return successful operation
   */
  savePhotoResponse(file: Blob): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;
    if (file != null) { __formData.append('file', file as string | Blob);}
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gestiondestock/v1/photos/${encodeURIComponent(String(id))}/${encodeURIComponent(String(title))}/${encodeURIComponent(String(context))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<{}>;
      })
    );
  }
  /**
   * @param file undefined
   * @return successful operation
   */
  savePhoto(file: Blob): __Observable<{}> {
    return this.savePhotoResponse(file).pipe(
      __map(_r => _r.body as {})
    );
  }
}

module Gestiondestockv1photosService {
}

export { Gestiondestockv1photosService }
