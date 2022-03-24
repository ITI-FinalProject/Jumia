import { ProductsComponent } from './components/products/products.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './components/details/details.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotfoundComponent } from './shared/page-notfound/page-notfound.component';

const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},
  { path: 'product', component: ProductsComponent,},
  {path: 'details', component: DetailsComponent},
  {path:"home",component:HomeComponent},
  {path:"**",component:PageNotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
