import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit{
  public adminForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    // Inject the user service
  ) {}  ngOnInit(): void {
    this.adminForm = this.formBuilder.group({
      email: [''],
      password: ['']
    });
  } 
  admin(){
    console.log(this.adminForm.value.email);

    if(this.adminForm.value.email ==="admin@gmail.com" && this.adminForm.value.password) //admin@gmail.com
    {
      if(this.adminForm.value.password ==="admin@123") //admin@!23
      {
        this.router.navigate(['/addbook']);
      }
      else{
        alert("Wrong Credentials");
        this.router.navigate(['/admin']);
        window.location.reload();
      }

    }
    else{
      alert("Wrong Credentials");
      window.location.reload();
      this.router.navigate(['/admin']);
    }

}

}
