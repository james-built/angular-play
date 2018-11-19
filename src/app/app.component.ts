import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // can also do styles inline by using an array of strings containing the styles as follows
  /* styles: [`
  p {
    color: blue;
  }
  `]*/
})
export class AppComponent {
  name = 'James';
}
