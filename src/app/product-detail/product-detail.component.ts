import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { products } from '../products'
import { CartService } from '../cart.service'
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  products
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
    this.product = products[+params.get('productId')];
  });
  }

  addToCart(product){
    window.alert('Your Product has been added to cart');
    this.cartService.addToCart(product);
  }

  share() {
    window.alert('The product has been shared!');
  }
}