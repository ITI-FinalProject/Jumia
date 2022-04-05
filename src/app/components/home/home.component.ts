import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart/cart.service';
import { DetailApiService } from 'src/app/services/detail-api.service';
import { FavouritService } from 'src/app/services/Favourit/favourit.service';
import { HomeService } from 'src/app/services/home/home.service';

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  list: any;
  errorMassage: any;
  searchKey:string="";
  addToFavourit?:boolean;
  allFavourit: any;


  favourits = new Map<any, boolean>();

  breakpoints = {
    320: { slidesPerview: 1.6, spaceBetween: 20 },
    640: { slidesPerview: 2.6, spaceBetween: 20 },
    768: { slidesPerView: 4.6, spaceBetween: 40 },
    1024: { slidesPerview: 6.6, spaceBetween: 40 },
  }

  constructor(
    private service: HomeService,
    private cartService:CartService,
    private router:Router,
    private detailService: DetailApiService,
    private  FavouritService:FavouritService

    ) { }

  ngOnInit(): void {

    this.service.retutnHome().subscribe(
      (data) => {
        this.list = data;
        this.list.products.forEach((e:any) => {
          this.favourits.set(e.id,e.in_favorites);
        });
        console.log(this.list);
        
      },
      (error) => {
        this.errorMassage = error;
      }
    );

    this.cartService.search.subscribe((val:any)=>{
      this.searchKey = val;
    });

    this.getAllToFavourit();
  }


  addToCart(item:any){
    this.cartService.addToCart(item);
  }

  goToProductDetails(productDetails:any){
   this.router.navigate(["/details",productDetails.id]);

  }

  addtofav(item:any){
    this.FavouritService.addToFav(item);
    this.addToFavourit=true;

  }
  removeItemFav(item:any){
    this.FavouritService.removeFavItem(item);
    this.addToFavourit=false;

  }

  getAllToFavourit( ){
    this.FavouritService.returnAllToFavourit().subscribe(
      (data) => {
        this.allFavourit = data;
        console.log(this.allFavourit);
      },
      (error) => {
        this.errorMassage = error;
      }
    )
   }

  AddToFavourit( id :any){
   this.FavouritService.addToFavourit(id).subscribe(()=>{
    this.addToFavourit=true;
    // this.favourits.get(id)!= this.favourits.get(id);
   });
  }

  removeToFavourit( id :any){
    this.FavouritService.removeFromFavourit(id).subscribe(()=>{
      this.addToFavourit=false;
     });
  }

}
