import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [`
  body{
    background-color: #F4F4F4;
  }
  .card-header a:hover{
    text-decoration:none;
  }
  .card div{
    background-color: #FFFFFF;
  }
  .card {
    margin: 5px;
  }
  .card .card-link{
    margin: -20px 20px 10px 20px;
  }
  .card .card-map{
    margin: 0;
    padding: 0 20px;
  }
  .card .card-header button{
    background-color: #002C77;
  }
  .card .card-header .card-block{
    margin-left: 0;
    padding-left: 0;
  }
  .card-block .nav .item-hotel{
    margin-right: 15px;
  }
  .card-block .nav a{
    padding-left: 0;
  }
  .card .form-check ul{
    margin: 5px 0px 0px 15px;
  }
  .card span{
    margin: 5px 15px;
  }
  .card .card-header input{
    width: 100%
  }
  .card .nav-item i{
    color: #FDBA19;
  }
`]
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
