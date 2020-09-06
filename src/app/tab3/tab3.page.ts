import { Component } from '@angular/core';
import {LigaService} from 'src/app/services/liga.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  public leagues = {};
  public name = '';

  constructor(private ligaService: LigaService) {}

  ngOnInit(): void {
    this.ligaService.getData().subscribe(result => {
    this.leagues = result;
    console.log(this.leagues);
    });
  }
}
