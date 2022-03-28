import { Router } from '@angular/router';
import { DetailApiService } from './../../services/detail-api.service';
import { ProductApiService } from './../../services/product-api.service';
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  public productList: any;
  errorMassage: any;
  searchKey:string="";

  constructor(
    private api: ProductApiService,
    private detailService: DetailApiService,
    private cartService:CartService,
    private router:Router,
  ) {}

  ngOnInit(): void {
    this.api.getProducts().subscribe(
      (res) => {
        this.productList = res;
      },
      (error) => {
        this.errorMassage = error;
      }
    );

    this.cartService.search.subscribe((val:any)=>{
      this.searchKey = val;
    })
  }

  showOnDetails(item: any) {
   // this.detailService.showOnDetails(item);
   this.router.navigate(["/details",item.id]);

  }
}
