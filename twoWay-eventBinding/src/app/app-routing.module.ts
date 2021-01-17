import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductdataComponent } from './productdata/productdata.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {​​ path: 'product-Info', component: ProductdataComponent  }​​,
  {​​ path: 'welcome', component: AppComponent  }​​,
  {​​path: 'home', component :HomePageComponent }​​,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
