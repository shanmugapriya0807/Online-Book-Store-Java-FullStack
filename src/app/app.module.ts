import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { TagsComponent } from './tags/tags.component';
import { CartpageComponent } from './cartpage/cartpage.component';
import { BookpageComponent } from './bookpage/bookpage.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { ImageSlideshowComponent } from './image-slideshow/image-slideshow.component';
import {  HttpClientModule } from '@angular/common/http';

import { AddbookComponent } from './addbook/addbook.component';
import { ManagebookComponent } from './managebook/managebook.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { RegistrationComponent } from './registration/registration.component';

import { LogoutComponent } from './logout/logout.component';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { AdminComponent } from './admin/admin.component';

//import {RatingModule} from 'ng-starrating';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    TagsComponent,
    CartpageComponent,
    BookpageComponent,
    NotFoundComponent,
    LoginComponent,
    ImageSlideshowComponent,
    AddbookComponent,
    ManagebookComponent,
    CheckoutComponent,
    RegistrationComponent, 
    LogoutComponent,
    AdminComponent,
    
    
  ],
  imports: [
    MatDialogModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // RouterModule.forChild([
    //   {path : 'addProduct',component:AddbookComponent},
    //   {path:'' ,redirectTo :'/addProduct',pathMatch:'full'},
    // ])
  ],
  providers: [],
  bootstrap: [AppComponent],
  //jc add this
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]

})
export class AppModule { }
