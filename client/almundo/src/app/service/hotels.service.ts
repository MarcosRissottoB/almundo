
import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable' ;

import 'rxjs/add/operator/catch' ;
import 'rxjs/add/operator/map' ;
import 'rxjs/add/operator/toPromise';


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


  constructor( private _http: Http) {
  }

  getHotels(){
    return this._http.get (this.urlBase)
               .map( res => res.json());
  }

}


export interface Hotel{
  name: String;
  stars: String;
  price: String;
};
