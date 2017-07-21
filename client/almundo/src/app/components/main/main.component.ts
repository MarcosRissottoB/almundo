import { Component, OnInit } from '@angular/core';
import { HotelsService, Hotel } from '../../service/hotels.service';
import 'rxjs/add/operator/switchMap';
import { ActivatedRoute, Router } from '@angular/router';




@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styles: []
})
export class MainComponent implements OnInit {

  hotels:Hotel[] = [];
  result:any[];
  private clone(object: any){
    // hack
    return JSON.parse(JSON.stringify(object));
  }


  constructor( private _hotelsService: HotelsService,
              //  private route: ActivatedRoute,
              //  private router: Router
             ) {

               this._hotelsService.getHotels()
                                  .subscribe(
                                      result => {
                                              this.hotels = result;

                                              console.log(this.hotels);
                                      },
                                      error => {
                                          console.log("Error: ", error);
                                      }
                                  );
             }


  ngOnInit() {

    //  this.getHotels();

 }

 // getHotels() {
 //   this._hotelsService.getHotels()
 //
 // }



 // search() {
 // 	this.searchService.search(this.searchField.value)
 // 	  .subscribe(result => {
 //        this.result = result.artists.items
 //      });
 // }

}
