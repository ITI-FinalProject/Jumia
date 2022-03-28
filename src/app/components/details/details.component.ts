import { DetailApiService } from './../../services/detail-api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  public product: any = [];
  productId: any;
  public getOneProduct:any;
  errorMassage: any;


  constructor(private detailService: DetailApiService,private activeRout: ActivatedRoute) {}

  ngOnInit(): void {

    this.activeRout.paramMap.subscribe((params: ParamMap) => {
      this.productId = params.get('id');
    });

    this.detailService.getProducts().subscribe((res) => {
      this.product = res;
    });

    this.detailService.returnOneProducts(this.productId).subscribe(
      (data) => {
        this.getOneProduct = data;        
      },
      (error) => {
        this.errorMassage = error;
      }
    );
   
  }

  
}


