import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';

import { ProductsComponent } from './components/products/products.component';
import { DetailsComponent } from './components/details/details.component';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { CartComponent } from './components/cart/cart.component';
import { OrderComponent } from './components/order/order.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { PageNotfoundComponent } from './shared/page-notfound/page-notfound.component';
import { SwiperModule } from 'swiper/angular';
import { FilterPipe } from './shared/page-notfound/filter.pipe';
import { FavouritComponent } from './components/favourit/favourit.component';

// @NgModule({
//   declarations: [AppComponent, ProductsComponent, DetailsComponent],

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    ProductsComponent,
    CartComponent,
    OrderComponent,
    DetailsComponent,
    ContactusComponent,
    AboutusComponent,
    PageNotfoundComponent,
    FilterPipe,
    FavouritComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    SwiperModule,
  ],

  exports: [],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
