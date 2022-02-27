import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignupComponent } from './components/signup/signup.component';
import {MatCardModule} from '@angular/material/card';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule } from '@angular/material/form-field';
import { FlexLayoutModule } from "@angular/flex-layout";
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FooterComponent } from './components/footer/footer.component';
import { FogotpasswordComponent } from './components/fogotpassword/fogotpassword.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { GetallBooksComponent } from './components/getall-books/getall-books.component';
import {MatSelectModule} from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { NgxPaginationModule } from 'ngx-pagination';
import { BookviewComponent } from './components/bookview/bookview.component';
import { CartComponent } from './components/cart/cart.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { OrderPlacedComponent } from './components/order-placed/order-placed.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    DashboardComponent,
    FooterComponent,
    FogotpasswordComponent,
    ResetpasswordComponent,
    GetallBooksComponent,
    BookviewComponent,
    CartComponent,
    WishlistComponent,
    
    OrderPlacedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatFormFieldModule,
    FlexLayoutModule,
    MatIconModule,
    MatToolbarModule,
    MatSelectModule,
    MatDividerModule,
    NgxPaginationModule,
    MatExpansionModule,
    MatRadioModule,
    MatSnackBarModule,
    NgxStarRatingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
