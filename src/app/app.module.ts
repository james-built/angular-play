import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { TestComponent } from './first/test.component';
import { FooComponent } from './foo/foo.component'
import { SuccessAlertComponent } from './success-alert/success-alert.component'
import { WarningAlertComponent } from './warning-alert/warning-alert.component'
import { UpdateUsername } from './update-username/update-username.component'

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    FooComponent,
    SuccessAlertComponent,
    WarningAlertComponent,
    UpdateUsername
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
