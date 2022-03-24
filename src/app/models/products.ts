export interface Iproducts{

    id:number;
    price:number;
    old_price:number;
    discount:number;
    image:string;
    name:string;
    description:string;
    images:[];
    in_favorites:boolean;
    in_cart:boolean;
    categories_id:number;

}