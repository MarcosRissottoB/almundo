import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styles: [`
  *{
    background-color: #F4F4F4;
    margin-bottom: 0;
  }
  .main-item{
    paddin: 5px;
    font-size: 10px;
  }
  .destiny-item{
    margin-left: 15px;
  }
  .card .nav-item .fa{
    margin-right: 5px;
  }
  .item-destiny{
    font-size: 10px;
  }
  .destiny-item .nav-destiny li a{
    font-size: 12px;
    font-family: sans-serif;
    padding: 10px 20px 0px 0px;
  }
  .justify-content-end li{
    margin-top: 10px;
    font-size: 12px;
  }
  .justify-content-end button{
    background-color: #fff;
    font-size: 12px;
  }
`]
})
export class FilterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
