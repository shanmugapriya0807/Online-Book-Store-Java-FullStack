import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Product } from '../shared/models/model-service.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit{
  public addBookForm !:FormGroup;
  constructor(private formBuilder:FormBuilder,private http:HttpClient,
    private router:Router){}
    ngOnInit(): void {
      this.addBookForm = this.formBuilder.group({
        title:[''],
        author:[''],
        description:[''],
        pictureUrl:[''],
        price:['']
        })
   }
  addProduct() {
    this.http.post<any>("http://localhost:8080/addProduct",this.addBookForm.value)
    .subscribe(res =>{
      alert("Product Added successfully");
      this.addBookForm.reset();
      this.router.navigate(['/addProduct']);
    },err=>{
        alert("something went wrong");
    }) 
  }
}
// jc command this
// public addbookForm !:FormGroup;
// constructor(private formBuilder:FormBuilder,private http:HttpClient,
//  private router:Router){}
// ngOnInit(): void {
//   this.addbookForm = this.formBuilder.group({

//     title:[''],
//   author:[''],
//   description:[''],
//   price:['']
 
//   })
  
// }

// onSubmit() {
//  // Here, you can add logic to save the book details, such as sending it to a backend service.
//  // For this example, we'll simply log the book object.
// // this.bookService.addBook(this.books);
//  //this.books = new Bookdetails(); // Reset the form after adding the book
//  //console.log(this.books);
//  this.http.post<any>("http://localhost:8080/addbook",this.addbookForm.value)
//    .subscribe(res=>{
//      alert("Book Added Successfully !!!");
//      this.addbookForm.reset();
//      this.router.navigate(['/home']);
//      //this.router.navigate(['/home']);
//    },err=>{
//      alert("Something went Wrong");
//    })
// }