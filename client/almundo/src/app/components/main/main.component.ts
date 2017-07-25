import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';


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

    hotels:Hotel[] = [];

    constructor( private _hotelsService: HotelsService) {

      this._hotelsService.getHotels()
          .subscribe( data =>{
              console.log("data...", data);
          })

    }

    ngOnInit():void{


    }

}
