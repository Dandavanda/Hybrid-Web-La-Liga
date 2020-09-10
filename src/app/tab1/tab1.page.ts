import { Component } from '@angular/core';
import {LigaService} from 'src/app/services/liga.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  liList: any;


  constructor(private ligaService: LigaService,private router:Router) {}

  ngOnInit(): void {
    this.ligaService.getTeam().subscribe(result => {
      this.liList = result.teams;
      console.log(result.teams);
    });
  }

  
  // detailteam(l:string):void{
  //   let liList = {
  //                   name: l.strTeam,
  //                   desc: l.strDescriptionEN,
  //                   badge: l.strTeamBadge,
  //                   jersey: l.strTeamJersey,
  //                   banner: l.strTeamBanner
  //   }

  //   let extras: NavigationExtras = {
  //     queryParams: {
  //       special: JSON.stringify(liList)
  //     }
  //   };

  //   this.router.navigate(['/detail'], extras);
  // }

}

