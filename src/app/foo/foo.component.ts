import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.css']
})
export class FooComponent implements OnInit {
  satisfyingClick = true
  buttonClickMessage = 'go on, click the button'
  userMessage = ''

  constructor() {
    
  }

  ngOnInit() {
  }

  onClick() {
    this.buttonClickMessage = 'clicking buttons makes things happen'
  }

  onUpdateMessage(event) {
    this.userMessage = event.target.value
  }
}
