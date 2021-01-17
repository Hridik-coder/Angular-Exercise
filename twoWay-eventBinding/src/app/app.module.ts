import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductdataComponent } from './productdata/productdata.component';
import { ProductserviceService } from './productservice.service';
import { Productdata } from './productdataClass';
import { FormsModule } from '@angular/forms';
import { SearchbtnComponent } from './searchbtn/searchbtn.component';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductdataComponent,
    SearchbtnComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Productdata,
    FormsModule
  ],
  providers: [
    ProductserviceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
