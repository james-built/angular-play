import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { TestComponent } from './first/test.component';
import { FooComponent } from './foo/foo.component'
import { SuccessAlert } from './SuccessAlert/SuccessAlert.component'
import { WarningAlert } from './WarningAlert/WarningAlert.component'

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    FooComponent,
    SuccessAlert,
    WarningAlert
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
