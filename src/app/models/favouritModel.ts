import { Iproducts } from './products';

export interface IFavouritModel{
data:Data;
} 

interface Data{
     currentPage:any;
     FavouritData: IFavouritData[];
     firstPageUrl:any;
       from:any;
       lastPage:any;
       lastPageUrl:any;
       nextPageUrl:any;
       path:any;
       perPage:any;
       prevPageUrl:any;
       to:any;
       total:any;
}


interface IFavouritData{
    id:any;
    products:Iproducts;
} 