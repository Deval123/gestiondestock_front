import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-page-utilisateur',
  templateUrl: './page-utilisateur.component.html',
  styleUrls: ['./page-utilisateur.component.scss']
})
export class PageUtilisateurComponent implements OnInit {

  constructor(private routrer: Router) { }

  ngOnInit(): void {
  }

  nouvelUtilisateur(): void {
    this.routrer.navigate(['nouvelutilisateur']);
  }
}
