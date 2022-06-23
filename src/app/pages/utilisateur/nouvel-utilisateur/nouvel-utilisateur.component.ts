import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-nouvel-utilisateur',
  templateUrl: './nouvel-utilisateur.component.html',
  styleUrls: ['./nouvel-utilisateur.component.scss']
})
export class NouvelUtilisateurComponent implements OnInit {

  origin = '';
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  cancel(): void {
    this.router.navigate(['utilisateurs']);
  }
}
