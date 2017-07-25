import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [`
  .navbar-primary{
      background-color: #10407E;
  }
  .navbar-primary .nav a {
    font-size: .875rem;
    line-height: inherit;
    color: #fff;
    font-family: sans-serif;
    margin-left: 4px;
    cursor: pointer;
    vertical-align: super;
    padding-left: 4px;
  }
  .navbar-club{
    color:#FF8300;
  }
`]
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
