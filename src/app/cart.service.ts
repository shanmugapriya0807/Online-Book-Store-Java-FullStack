import { Injectable } from '@angular/core';
import { Cart } from './shared/models/Cart';
import { Books } from './shared/book';
import { CartItem } from './shared/models/cartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
 private cart:Cart = new Cart();
 addToCart(book:Books) :void{
  let cartItem = this.cart.items.find(item => item.book.id === book.id)
  if(cartItem){
    this.changeQuantity(book.id, cartItem.quantity +1)
    return;
  }
  this.cart.items.push(new CartItem(book));
 }
 removeFromCart(bookid:number):void{
  this.cart.items = this.cart.items.filter(item =>item.book.id !=bookid)
 }
 changeQuantity(quantity:number,bookid:number){
  let cartItem = this.cart.items.find(item => item.book.id === bookid);
  if(!cartItem) return;
  cartItem.quantity = quantity;
 }
 getCart():Cart{
   return this.cart;
 }
  //constructor() { }
}
