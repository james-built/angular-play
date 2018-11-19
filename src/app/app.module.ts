import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { TestComponent } from './first/test.component';
import { FooComponent } from './foo/foo.component'

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    FooComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
