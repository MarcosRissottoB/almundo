import { Component, OnInit } from '@angular/core';
import { ImagesService, Image } from '../../../service/images.service';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styles: []
})
export class CarouselComponent implements OnInit {

  images:Image[] = [];

  constructor( private _imagesService:ImagesService ) { }

  ngOnInit() {

    this.images = this._imagesService.getImages();

  }

}
