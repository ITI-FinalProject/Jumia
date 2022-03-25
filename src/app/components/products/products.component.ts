import { DetailApiService } from './../../services/detail-api.service';
import { ProductApiService } from './../../services/product-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  public productList: any;
  errorMassage: any;

  constructor(
    private api: ProductApiService,
    private detailService: DetailApiService
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
  }

  showOnDetails(item: any) {
    this.detailService.showOnDetails(item);
  }
}
