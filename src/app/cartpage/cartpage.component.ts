import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Cart } from '../shared/models/Cart';
import { CartItem } from '../shared/models/cartItem';


@Component({
  selector: 'app-cartpage',
  templateUrl: './cartpage.component.html',
  styleUrls: ['./cartpage.component.css']
})
export class CartpageComponent implements OnInit{
  cart!: Cart;
  constructor(private cartService: CartService){ //after design this page,i will remove it
      // let books = storeService.getAll();
      // cartService.addToCart(books[1]);
      // cartService.addToCart(books[3]);
      // cartService.addToCart(books[5]);
    this.setCart();
  }
  

  ngOnInit(): void {
    }
    setCart(){
      this.cart = this.cartService.getCart();
    } 
 removeFromCart(CartItem: CartItem) {
  this.cartService.removeFromCart(CartItem.book.id);
  this.setCart();
 }
 changeQuantity(cartItem:CartItem,quantityInString:string){
  const quantity = parseInt(quantityInString);
  this.cartService.changeQuantity(cartItem.book.id,quantity);
  this.setCart();
 }

}
