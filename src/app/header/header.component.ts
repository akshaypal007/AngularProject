import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
              <div class="navbar">
                <div class="navbar-header">
                  <a href="#" class="navbar-brand">IMAGICA</a>
                  <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#mynavbar" aria-expanded="false" (click)="shownav()">
                    MENU
                  </button>
                </div>
     
                <div class="collapse navbar-collapse" id="mynavbar" [ngClass]="{'show':keyword}">
                  <ul class="nav navbar-nav">
                    <li><a routerLink="home">HOME&nbsp;&nbsp;<i class="fa fa-home"></i></a></li>
                  </ul>
                  <ul class="nav navbar-nav navbar-right">
                    <li><a routerLink="login" class="buton">LOGIN&nbsp;&nbsp;<i class="fa fa-user"></i></a></li>
                    <li><a routerLink="signup" class="buton">SIGN UP&nbsp;&nbsp;<i class="fa fa-user-plus"></i></a></li>
                  </ul>
                </div>
              </div>
            `,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  keyword = false

  shownav()
  {
    this.keyword = !this.keyword;
  }

}
