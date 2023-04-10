import { Component, OnInit,ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { DiscountOffers } from '../Shared-Classes-and-types/DiscountOffers-Enum';
import { IProduct } from '../Shared-Classes-and-types/IProduct';
import { ICategory } from '../Shared-Classes-and-types/ICategory';
import { ChildComponent } from '../child/child.component';
import { ProductServiceService } from '../Services/product-service.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  @ViewChild(ChildComponent) child !: ChildComponent;
  Discount:DiscountOffers=DiscountOffers['noDiscount'];
  StoreName:string="AngularStore";
  StoreLogo:string="./assets/ang.jfif";
  ProductList:IProduct[]=[];

  CategoryList:ICategory[]=[{ID:1,Name:'Mobile'},{ID:4,Name:'Iphone'},{ID:3,Name:'Ipad'}];
  ClientName:string="";
  IsPurshased:Boolean=false;
  ishide:boolean=true;
  selectProduct!:IProduct;
  productId!:number;
getData($event: IProduct[])
{
this.ProductList=$event;
}

  toggle(){
    this.IsPurshased=!this.IsPurshased;

  }
  hide(){
    this.ishide=!this.ishide;

  }
  constructor(private ProductServices:ProductServiceService,private router:Router,private activeroute:ActivatedRoute){}
ngOnInit():void{
//this.child.logData();
}

ngAfterViewInit()
  {
    this.child.sayWelcome();
  }


  renderValue(){
    this.ProductList=this.ProductServices.GetAllProducts();
     }

  getProductById(){
   var product=this.ProductServices.GetProductById(this.productId)
      if(product!=null){
        this.selectProduct=product;
      }
 }

 WithDiscount()
 {
   this.router.navigate(['discount'],{relativeTo:this.activeroute})
 }

 WithoutDiscount(){

  this.router.navigate(['noDiscount'],{relativeTo:this.activeroute})
 }

}

