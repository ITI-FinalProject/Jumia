import { Iproducts } from './products';
import { IBanners } from './banners';

export interface IHome{
 data:IGetDat;
}

interface IGetDat{
  banner: IBanners[];
  product:Iproducts[];
}
