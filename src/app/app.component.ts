import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  mainActivated(ev) {
    console.log('Main outlet activated', ev);
  }

  auxActivated(ev) {
    console.log('Aux outlet activated', ev);
  }
}
