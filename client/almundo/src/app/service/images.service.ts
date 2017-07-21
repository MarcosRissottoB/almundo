
import { Injectable } from '@angular/core';

@Injectable()
export class ImagesService {

  private images:Image[] =  [

		{
      "url" : "../../../assets/img/hotel-emperador-1.jpeg"
    }
	];


  constructor() {

  }

  getImages():Image[]{
    return this.images;
  }

}

export interface Image{
  url: string;
};
