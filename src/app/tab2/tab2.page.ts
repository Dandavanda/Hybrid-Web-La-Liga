import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import {LigaService} from 'src/app/services/liga.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public fav;
  constructor() {
    this.fav = JSON.parse(localStorage.getItem('fav'));
    console.log(this.fav);
  }


}
