import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { studentnamepipe } from './hridik.pipe';

@NgModule({
  declarations: [
    AppComponent,
    studentnamepipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [studentnamepipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
