import { Component, OnInit } from '@angular/core';
import { RouterLinkActive, ActivatedRoute } from '@angular/router';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  liList: any;

  constructor(private route: ActivatedRoute, private router: Router){
    this.route.queryParams.subscribe(params => {
      if (params && params.special){
        this.liList = JSON.parse(params.special);
      }
    })
  }
  ngOnInit() {
  }


  // save(){
  //   localStorage.setItem('fav', JSON.stringify(this.liList));
  // }

//}


  save() {
    // mmebuat variable array untuk menampung objectjson 
    let data = [];
  
    // buat variable w untuk menampung data yang sudah ada di local storage 
    let w = JSON.parse(localStorage.getItem('fav'));
  
    console.log(w);
    // cek apakah favorite sudah ada
    if(w != null){
      for(let i=0; i<w.lenght; i++){
        data.push(w[i]);
      }
    }
    data.push(this.liList);
    localStorage.setItem('fav', JSON.stringify(data));
      localStorage.setItem('fav', JSON.stringify(this.liList));
    }

}
