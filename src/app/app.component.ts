import { Component } from '@angular/core';

//importing aos
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyAngularProject';

  ngOnInit(){
    AOS.init();
  }
}
