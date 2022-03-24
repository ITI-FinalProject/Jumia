import { DetailApiService } from './../../services/detail-api.service';
import { ProductApiService } from './../../services/product-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  public pElectronicList: any;
  public pClothesList: any;
  public pSportsList: any;
  public pCronaFightList: any;
  public plightingToolsList: any;
  // product: IProduct[] = [];

  constructor(
    private api: ProductApiService,
    private detailService: DetailApiService
  ) {}

  ngOnInit(): void {
    this.api.getElectronicProducts().subscribe((res) => {
      this.pElectronicList = res;
    });

    this.api.getClothesProducts().subscribe((res) => {
      this.pClothesList = res;
    });

    this.api.getSportsProducts().subscribe((res) => {
      this.pSportsList = res;
    });

    this.api.getCronaFightProducts().subscribe((res) => {
      this.pCronaFightList = res;
    });

    this.api.getlightingToolsProducts().subscribe((res) => {
      this.plightingToolsList = res;
    });
  }
  showOnDetails(item: any) {
    this.detailService.showOnDetails(item);
  }
}
