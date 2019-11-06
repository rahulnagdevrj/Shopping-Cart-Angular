import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { products } from '../products';
import { CartService } from '../cart.service'
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;
  product;

  constructor(
    private cartService:CartService
  ){}
  
  ngOnInit(){
    
  }
  addToCart(product){
    window.alert('Your Product has been added to cart');
    this.cartService.addToCart(product);
  }

}