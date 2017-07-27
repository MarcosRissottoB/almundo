import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';

import { HotelsService, Hotel } from '../../service/hotels.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  providers: [ HotelsService ],
  styles: [`
  *{
    background-color: #F4F4F4;
  }
`]
})
export class MainComponent implements OnInit {

    hotels:Hotel[] =[];

    constructor( private _hotelsService: HotelsService,
                 private router: Router
              ) {}

    ngOnInit(){
      this.hotels =this._hotelsService.getHotels();

    }

}
