import { Injectable } from '@angular/core';
// @ts-ignore
import { AuthenticationService } from '../../../gs-api/src/services/authentication.service';
import {Router} from "@angular/router";
import {AuthenticationRequest} from "../../../gs-api/src/models/authentication-request";
import {AuthenticationResponse} from "../../../gs-api/src/models/authentication-response";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  login(authenticationRequest: AuthenticationRequest){
    return this.authenticationService.authenticate(authenticationRequest)
      .subscribe((data: AuthenticationResponse) => {
        localStorage.setItem('authenticationResponse', JSON.stringify(data));
      }, (error: any) => {
        console.log(error);
        this.router.navigate(['inscrire']);
      })
  }
}
