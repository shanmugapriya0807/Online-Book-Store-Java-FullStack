import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
declare var Razorpay:any;
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit{
  public checkOutForm !:FormGroup;
  constructor(private formBuilder:FormBuilder,private http:HttpClient,
    private router:Router){}

  ngOnInit(): void {
    this.checkOutForm = this.formBuilder.group({
      address:[''],
      userName:[''],
      phoneNumber:[''],
      productName:[''],
      quantity:[''],
      price:['']
      })
 }
  addCart() {
    this.http.post<any>("http://localhost:8080/addCart",this.checkOutForm.value)
    .subscribe(res =>{
      // alert("Order succesfully");
      this.checkOutForm.reset();
      this.router.navigate(['/addProduct']);
    },err=>{
        alert("something went wrong");
    }) 
  }
  payNow(){
    const amountInput = document.getElementById("amountInput") as HTMLInputElement;
    const userAmount = amountInput.valueAsNumber;
    const checkoutAmount = userAmount * 100;
    const RazorpayOptions ={
      description :' Sample Razorpay',
      currency:'INR',
      amount:checkoutAmount,
      name:'Santhiya',
      key:'rzp_test_n7B3WeMFtEXUqs',
      images:'https://i.imgur.com/FApqk3D/jpeg',
      prefill:{
        // name:'Shanmu',
        // email:'shanmu@gmail.com',
        phone:'6352417845'
      },
      theme:{
        color:'pink'
      },
      modal:{
        ondismiss:() =>{
          console.log('dismissed')
        }
      }
    }

    const successCallback =(paymentid:any) =>{
      console.log(paymentid);
      alert("Order succesfully");
      
    }
    const failureCallback = (e:any) =>{
      console.log(e);
    }
    Razorpay.open(RazorpayOptions,successCallback,failureCallback) 
  }

 
}
