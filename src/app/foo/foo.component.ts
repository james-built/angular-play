import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foo',
  template: `
  <app-test></app-test>
  <p>this is a component using an inline template</p>
  `,
  styleUrls: ['./foo.component.css']
})
export class FooComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
