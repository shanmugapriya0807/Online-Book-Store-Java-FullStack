import { Books } from "../book";

export class CartItem{
    constructor(book:Books){
        this.book= book;
        this.price; //javascript code,U can write this method
    }
    book:any;
    quantity:number = 1;
    get price(): number{
       return this.book.price * this.quantity;
    }
}