import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-nouvelle-categorie',
  templateUrl: './nouvelle-categorie.component.html',
  styleUrls: ['./nouvelle-categorie.component.scss']
})
export class NouvelleCategorieComponent implements OnInit {

  origin = '';
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  cancel(): void {
    this.router.navigate(['categories']);
  }
}
