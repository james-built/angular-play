import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.css']
})
export class FooComponent implements OnInit {
  satisfyingClick = true
  buttonClickMessage = ''
  animalName = 'Type an animal here'

  constructor() {
    
  }

  ngOnInit() {
  }

  onClick() {
    this.buttonClickMessage = 'If you could be an animal it would be a ' + this.animalName
  }

  onUpdateMessage(event) {
    this.animalName = event.target.value
  }
}
