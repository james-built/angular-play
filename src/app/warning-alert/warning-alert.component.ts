import { Component } from "@angular/core";

@Component({
  selector: 'app-warning-alert',
  template: '<p>Fatal Error!</p>',
  styles: [`
  p {
    color: red;
    background-color: rgba(128, 128, 128, 0.603);
    text-align: center;
  }
  `]
})
export class WarningAlertComponent {

}