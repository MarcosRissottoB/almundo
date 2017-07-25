import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-secondary',
  templateUrl: './navbar-secondary.component.html',
  styles: [`
    .navbar-secondary{
    background-color: #466994;
    font-size: 14px;
    line-height: 5px;
    margin-bottom: 0px;
  }
  .navbar-secondary .nav{
    margin: 0 0 0 40px;
  }
  .navbar-secondary .nav ul{
    padding: 0;
    text-align: center;
  }
  .navbar-secondary .nav a {
    padding: 5px 15px;
    display: block;
    text-decoration: none;
    color: #fff;
  }
`]
})
export class NavbarSecondaryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
