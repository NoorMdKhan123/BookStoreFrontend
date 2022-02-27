import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from 'src/app/service/book/book.service';
import { UserService } from 'src/app/service/user/user.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  editDetailsOfUserForm!: FormGroup;
  book_qty = 1;
  token:any;
  cartList: any = [];
  step = 0;
  orderList: any = [];
  listCountOfCart: any;
  cartId :any
  cartCount : any;
  quantity = 1;

  constructor(private bookservice:BookService,private route:Router,private formbuilder:FormBuilder,private userservice:UserService) { }

 
  ngOnInit(): void {
    this.token=localStorage.getItem('token');
    this.editDetailsOfUserForm = this.formbuilder.group({
      fullName: ['',Validators.required],
      mobileNo: ['',Validators.required],
      address: ['',Validators.required],
      city: ['',Validators.required],
      state: ['',Validators.required],
   
    })
   this.getCartlist()
  }
  getCartlist(){
    this.bookservice.getAllCartBooks(this.token).subscribe((response:any)=>{
      console.log(response)
      console.log("here is cart list",this.cartList)
      this.cartList = response.cartData
      console.log("all cart data",response.cartData)
      this.cartList = response.cartData
      this.cartList.reverse()
       this.cartCount = response.cartData.length
      console.log("here is cart list",this.cartList)
      console.log("all cart count", this.cartCount)
    })
  }

  deleteCartItem(book:any)
  {
    console.log("id",book.cartId)
    let data=
    {
      cartId:book.cartId
    }
    this.bookservice.deleteCartItem(data,this.token).subscribe((response:any)=>{
      console.log("cart item got deleted");
    })
  }

  cartQuantityUpdate(book:any)
  {
    let data = {
      cartId: book.cartId,
      bookId:book.bookId,
      qtyToOrder :this.quantity,
    }
    this.bookservice.updateCartQty(data,this.token).subscribe((response:any) =>{
      console.log(response)
    })
  }

  decrement(book:any){
    if(this.quantity != 1){
      this.quantity = this.quantity - 1;
      }
     this.cartQuantityUpdate(book);
  }

  increment(book:any){
    this.quantity = this.quantity + 1;
     this.cartQuantityUpdate(book);
  }
  

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  updateAddress(){
    if (this.editDetailsOfUserForm.valid) {
      let data={
        
        address : this.editDetailsOfUserForm.value.address,
        city : this.editDetailsOfUserForm.value.city,
        state : this.editDetailsOfUserForm.value.state,
        typeId: this.editDetailsOfUserForm.value.home

       
      }
      this.userservice.addressUpdate(data, this.token).subscribe((response: any)=>{
        console.log(response)
      })
    }
  }
  placeOrderForBook()
  {
    this.cartList.forEach((element:any) => {
      console.log(element)
      this.orderList.push(
        {
        adressId : element.adressId,
        bookId : element.bookId,
        orderQuantity: element.book_qty
        
        })
    });
    let req = {
      "orders": this.orderList
    }
    this.bookservice.placeOrder(req,this.token).subscribe((response: any) => {
      console.log(response);

    })
    this.route.navigateByUrl("/dashboard/orderPlaced")

  }

}