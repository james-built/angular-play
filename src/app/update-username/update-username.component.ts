import { Component } from "@angular/core";

@Component({
  selector: 'app-update-username',
  templateUrl: './update-username.component.html'
})
export class UpdateUsername {
  username = ''
  displayButton = false

  onUsernameSubmit() {
    this.username = ''
  }
}