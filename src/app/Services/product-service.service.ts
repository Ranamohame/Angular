import { Injectable } from '@angular/core';
import { DiscountOffers } from '../Shared-Classes-and-types/DiscountOffers-Enum';
import { IProduct } from '../Shared-Classes-and-types/IProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor() { }
  ProductList:IProduct[]=[{ID:1,Name:'Nokia',Quantity:4,Price:200,Image:"./assets/m1.jfif",Discount:DiscountOffers['noDiscount'],IsDiscount:false},
  {ID:2,Name:'Iphone',Quantity:3,Price:400,Image:"./assets/m2.jfif",Discount:DiscountOffers['noDiscount'],IsDiscount:false},
  {ID:3,Name:'Samsung',Quantity:6,Price:11000,Image:"./assets/m3.jfif",Discount:DiscountOffers['noDiscount'],IsDiscount:false},
  {ID:4,Name:'Oppo',Quantity:2,Price:250,Image:"./assets/m1.jfif",Discount:DiscountOffers['TenPercent'],IsDiscount:true},]

  GetAllProducts()
  {
    return this.ProductList;
  }

  GetProductById(proId:number){
    for(let product of this.ProductList){
      if(product.ID==proId){
        return product;
      }
    }
    return null;
      }


      GetDiscountedProduct():IProduct[] | null{
        let Product = this.ProductList.filter(prod=>prod.IsDiscount==true);
        return Product? Product : null;
     }

     GetNonDiscountedProduct():IProduct[] | null{
      let Product = this.ProductList.filter(prod=>prod.IsDiscount==false);
      return Product? Product : null;
    }
}
