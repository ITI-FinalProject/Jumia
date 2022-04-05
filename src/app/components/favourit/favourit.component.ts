import { Component, OnInit } from '@angular/core';
import { FavouritService } from 'src/app/services/Favourit/favourit.service';

@Component({
  selector: 'app-favourit',
  templateUrl: './favourit.component.html',
  styleUrls: ['./favourit.component.scss']
})
export class FavouritComponent implements OnInit {

  public products:any;

  
  constructor(
    private  serviceFav:FavouritService
  ) { }

  ngOnInit(): void {
    this.serviceFav.getProducts().subscribe(res=>{
      this.products=res;
    })
  }


}
