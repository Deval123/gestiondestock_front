/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { CommandeClientDto } from '../models/commande-client-dto';
@Injectable({
  providedIn: 'root',
})
class Gestiondestockv1commandeClientsService extends __BaseService {
  static readonly findAllPath = '/gestiondestock/v1/CommandeClients/all';
  static readonly savePath = '/gestiondestock/v1/CommandeClients/create';
  static readonly deletePath = '/gestiondestock/v1/CommandeClients/delete/{idCommandeClient}';
  static readonly updateClientPath = '/gestiondestock/v1/CommandeClients/update/client/{idCommande}/{idClient}';
  static readonly updateEtatCommandePath = '/gestiondestock/v1/CommandeClients/update/etat/{idCommande}/{etatCommande}';
  static readonly updateQuantiteCommandePath = '/gestiondestock/v1/CommandeClients/update/quantite/{idCommande}/{idLigneCommande}/{quantite}';
  static readonly findByIdPath = '/gestiondestock/v1/CommandeClients/{idCommandeClient}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return successful operation
   */
  findAllResponse(): __Observable<__StrictHttpResponse<Array<CommandeClientDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/CommandeClients/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<CommandeClientDto>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findAll(): __Observable<Array<CommandeClientDto>> {
    return this.findAllResponse().pipe(
      __map(_r => _r.body as Array<CommandeClientDto>)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  saveResponse(body?: CommandeClientDto): __Observable<__StrictHttpResponse<CommandeClientDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gestiondestock/v1/CommandeClients/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeClientDto>;
      })
    );
  }
  /**
   * @param body undefined
   * @return successful operation
   */
  save(body?: CommandeClientDto): __Observable<CommandeClientDto> {
    return this.saveResponse(body).pipe(
      __map(_r => _r.body as CommandeClientDto)
    );
  }

  /**
   * @param idCommandeClient undefined
   */
  deleteResponse(idCommandeClient: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/gestiondestock/v1/CommandeClients/delete/${encodeURIComponent(String(idCommandeClient))}`,
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
   * @param idCommandeClient undefined
   */
  delete(idCommandeClient: number): __Observable<null> {
    return this.deleteResponse(idCommandeClient).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `Gestiondestockv1commandeClientsService.UpdateClientParams` containing the following parameters:
   *
   * - `idCommande`:
   *
   * - `idClient`:
   *
   * @return successful operation
   */
  updateClientResponse(params: Gestiondestockv1commandeClientsService.UpdateClientParams): __Observable<__StrictHttpResponse<CommandeClientDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/gestiondestock/v1/CommandeClients/update/client/${encodeURIComponent(String(params.idCommande))}/${encodeURIComponent(String(params.idClient))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeClientDto>;
      })
    );
  }
  /**
   * @param params The `Gestiondestockv1commandeClientsService.UpdateClientParams` containing the following parameters:
   *
   * - `idCommande`:
   *
   * - `idClient`:
   *
   * @return successful operation
   */
  updateClient(params: Gestiondestockv1commandeClientsService.UpdateClientParams): __Observable<CommandeClientDto> {
    return this.updateClientResponse(params).pipe(
      __map(_r => _r.body as CommandeClientDto)
    );
  }

  /**
   * @param params The `Gestiondestockv1commandeClientsService.UpdateEtatCommandeParams` containing the following parameters:
   *
   * - `idCommande`:
   *
   * - `etatCommande`:
   *
   * @return successful operation
   */
  updateEtatCommandeResponse(params: Gestiondestockv1commandeClientsService.UpdateEtatCommandeParams): __Observable<__StrictHttpResponse<CommandeClientDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/gestiondestock/v1/CommandeClients/update/etat/${encodeURIComponent(String(params.idCommande))}/${encodeURIComponent(String(params.etatCommande))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeClientDto>;
      })
    );
  }
  /**
   * @param params The `Gestiondestockv1commandeClientsService.UpdateEtatCommandeParams` containing the following parameters:
   *
   * - `idCommande`:
   *
   * - `etatCommande`:
   *
   * @return successful operation
   */
  updateEtatCommande(params: Gestiondestockv1commandeClientsService.UpdateEtatCommandeParams): __Observable<CommandeClientDto> {
    return this.updateEtatCommandeResponse(params).pipe(
      __map(_r => _r.body as CommandeClientDto)
    );
  }

  /**
   * @param params The `Gestiondestockv1commandeClientsService.UpdateQuantiteCommandeParams` containing the following parameters:
   *
   * - `quantite`:
   *
   * - `idLigneCommande`:
   *
   * - `idCommande`:
   *
   * @return successful operation
   */
  updateQuantiteCommandeResponse(params: Gestiondestockv1commandeClientsService.UpdateQuantiteCommandeParams): __Observable<__StrictHttpResponse<CommandeClientDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;



    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/gestiondestock/v1/CommandeClients/update/quantite/${encodeURIComponent(String(params.idCommande))}/${encodeURIComponent(String(params.idLigneCommande))}/${encodeURIComponent(String(params.quantite))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeClientDto>;
      })
    );
  }
  /**
   * @param params The `Gestiondestockv1commandeClientsService.UpdateQuantiteCommandeParams` containing the following parameters:
   *
   * - `quantite`:
   *
   * - `idLigneCommande`:
   *
   * - `idCommande`:
   *
   * @return successful operation
   */
  updateQuantiteCommande(params: Gestiondestockv1commandeClientsService.UpdateQuantiteCommandeParams): __Observable<CommandeClientDto> {
    return this.updateQuantiteCommandeResponse(params).pipe(
      __map(_r => _r.body as CommandeClientDto)
    );
  }

  /**
   * @param idCommandeClient undefined
   * @return successful operation
   */
  findByIdResponse(idCommandeClient: number): __Observable<__StrictHttpResponse<CommandeClientDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/CommandeClients/${encodeURIComponent(String(idCommandeClient))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeClientDto>;
      })
    );
  }
  /**
   * @param idCommandeClient undefined
   * @return successful operation
   */
  findById(idCommandeClient: number): __Observable<CommandeClientDto> {
    return this.findByIdResponse(idCommandeClient).pipe(
      __map(_r => _r.body as CommandeClientDto)
    );
  }
}

module Gestiondestockv1commandeClientsService {

  /**
   * Parameters for updateClient
   */
  export interface UpdateClientParams {
    idCommande: number;
    idClient: number;
  }

  /**
   * Parameters for updateEtatCommande
   */
  export interface UpdateEtatCommandeParams {
    idCommande: number;
    etatCommande: 'EN_PREPARATION' | 'VALIDEE' | 'LIVREE';
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

export { Gestiondestockv1commandeClientsService }
