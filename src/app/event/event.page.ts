import { Component, OnInit } from '@angular/core';
import {LigaService} from 'src/app/services/liga.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-event',
  templateUrl: './event.page.html',
  styleUrls: ['./event.page.scss'],
})
export class EventPage implements OnInit {
  evList: any;

  constructor(private ligaService: LigaService,private router:Router) {}

  ngOnInit(): void {
    this.ligaService.getEvent().subscribe(result => {
      this.evList = result.events;
      console.log(result.events);
    });
  }

}
