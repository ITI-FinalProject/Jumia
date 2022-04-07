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
  public productList: any = [];
  public filterCategory: any;
  errorMassage: any;
  searchKey: string = '';

  constructor(
    private api: ProductApiService,
    // private detailService: DetailApiService,
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.api.getProducts().subscribe(
      (res) => {
        this.productList = res;
        this.filterCategory = res;
      },
      (error) => {
        this.errorMassage = error;
      }
    );

    this.cartService.search.subscribe((val: any) => {
      this.searchKey = val;
    });
  }

  showOnDetails(item: any) {
    this.router.navigate(['/details', item.id]);
  }

  filter(category_id: number) {
    this.filterCategory = this.productList.filter((a: any) => {
      if (a.categories_id === category_id || category_id === 0) {
        return a;
      }
    });
  }
}
