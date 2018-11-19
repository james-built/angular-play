import { Component } from "@angular/core";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html'
}) // decorator function configures this class for angular
export class TestComponent {
  data: string = "something to show"
}