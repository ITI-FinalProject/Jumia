import { DetailApiService } from './../../services/detail-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  public product: any = [];

  constructor(private detailService: DetailApiService) {}

  ngOnInit(): void {
    this.detailService.getProducts().subscribe((res) => {
      this.product = res;
    });
  }
}
