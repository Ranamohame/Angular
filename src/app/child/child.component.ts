import { Component, EventEmitter ,Output,Input,OnInit} from '@angular/core';
import { DiscountOffers } from '../Shared-Classes-and-types/DiscountOffers-Enum';
import { IProduct } from '../Shared-Classes-and-types/IProduct';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})


export class ChildComponent implements OnInit{

  @Output() childEvent = new EventEmitter<any>();
  ProductList:IProduct[]=[{ID:1,Name:'Nokia',Quantity:4,Price:200,Image:"./assets/m1.jfif",Discount:DiscountOffers['noDiscount'],IsDiscount:false},
  {ID:2,Name:'Iphone',Quantity:3,Price:400,Image:"./assets/m2.jfif",Discount:DiscountOffers['noDiscount'],IsDiscount:false},
  {ID:3,Name:'Samsung',Quantity:6,Price:11000,Image:"./assets/m3.jfif",Discount:DiscountOffers['noDiscount'],IsDiscount:false},
  {ID:4,Name:'Oppo',Quantity:2,Price:250,Image:"./assets/m1.jfif",Discount:DiscountOffers['TenPercent'],IsDiscount:true},

]


  constructor() { }

  SendData()
  {
    this.childEvent.emit(this.ProductList);
  }

  sayWelcome()
  {
    //alert('welcome');
  }
  ngOnInit(): void {
  }

}
