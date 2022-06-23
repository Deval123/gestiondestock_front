import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-changer-mot-de-passe',
  templateUrl: './changer-mot-de-passe.component.html',
  styleUrls: ['./changer-mot-de-passe.component.scss']
})
export class ChangerMotDePasseComponent implements OnInit {

  origin = '';
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      this.origin = data['origin'];
    })
  }


  cancelClick() {
    this.router.navigate(['profil']);
  }

  saveClick() {

  }
}
