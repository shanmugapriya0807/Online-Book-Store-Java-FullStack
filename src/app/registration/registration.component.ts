import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup,FormBuilder} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public signupForm !:FormGroup;
  constructor(private formBuilder:FormBuilder,private http:HttpClient,
   private router:Router){}
  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
    name:[''],
    userId:[''],
    email:[''],
    phone:[''],
    password:[''],
    cpassword:[''],
    // gender:['']
    })
    
  }

  signUp(){
      this.http.post<any>("http://localhost:8080/user",this.signupForm.value)
    .subscribe(res=>{
      alert("Registered Successfully !!!");
      this.signupForm.reset();
      this.router.navigate(['/login']);
      //this.router.navigate(['/home']);
    },err=>{
      alert("Something went Wrong");
    })

  }
  
  /*user:User=new User();
  constructor(private loginService:LoginService,private  router: Router){}
  ngOnInit(): void {
    
  }
  userRegister(){
    console.log(this.user);
    this.loginService.userRegister(this.user).subscribe(data=>
      {
        alert('Successfully user is registered!'),
        this.router.navigate(['/home']);

      },
      error=>alert('Sorry User is not registered!!'));
  }


  */

}
