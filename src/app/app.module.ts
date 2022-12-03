import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MdbCollapseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
