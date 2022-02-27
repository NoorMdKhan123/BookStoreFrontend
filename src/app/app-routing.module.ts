import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookviewComponent } from './components/bookview/bookview.component';
import { CartComponent } from './components/cart/cart.component';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FogotpasswordComponent } from './components/fogotpassword/fogotpassword.component';
import { GetallBooksComponent } from './components/getall-books/getall-books.component';
import { LoginComponent } from './components/login/login.component';
import { OrderPlacedComponent } from './components/order-placed/order-placed.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { SignupComponent } from './components/signup/signup.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';

const routes: Routes = [
  {
    path: 'signup', component : SignupComponent
  },
  {
    path: 'login', component : LoginComponent
  },
  {
    path: 'forgotpassword', component : FogotpasswordComponent
  },
  {
    path: 'resetPassword/:token', component : ResetpasswordComponent
  },
  {
    path: 'dashboard', component : DashboardComponent,
    children:[
      {path:'', redirectTo:"/dashboard/books", pathMatch:'full' },
      {path:'books', component: GetallBooksComponent},
      {path:'bookview/:bookId', component:BookviewComponent},
      { path: 'getCart' , component:CartComponent    },
      { path: 'wishlist', component : WishlistComponent},
      { path: 'orderPlaced', component:OrderPlacedComponent}
    ]}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
