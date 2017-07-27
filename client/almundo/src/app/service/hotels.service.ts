
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';


@Injectable()
export class HotelsService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private urlBase = 'http://localhost:5001/api/hotel';

  private hotels:Hotel[] =  [

		{
			"name" : "Hotel Emperador",
			"stars" : "3",
			"price" : "ARS 1596"
		},
		{
			"name" : "Petit Palace San Bernardo",
			"stars" : "4",
			"price" : "ARS 2145"
		},
		{
			"name" : "Hotel Nuevo Boston",
			"stars" : "2",
			"price" : "ARS 861"
		}
	];


  constructor(
                private _http: Http
            ) {}


  getHotels():any{
    return this.hotels;

  }

}


export interface Hotel{
  name: String;
  stars: String;
  price: String;
};
