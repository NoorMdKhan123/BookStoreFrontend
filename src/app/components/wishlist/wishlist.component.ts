import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/service/book/book.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  token:any;
  wishListdata:any;
  wishlistCount: any;
  constructor(private bookService: BookService ,private router: Router) { }

  ngOnInit(): void {
    this.token=localStorage.getItem('token');
    this.getWishlist()
  }
  getWishlist(){
    this.bookService.getAllWishList(this.token).subscribe((response:any)=>{
      console.log(this.wishlistCount,"all wishlist details here");
      console.log(response)
      this.wishListdata = response.wishlist
      console.log("wishlist", response.wishlist)
      this.wishListdata.reverse()
      this.wishlistCount = response.wishlist.length
      console.log("all data::", this.wishListdata)
      console.log(this.wishlistCount,"all wishlist details here");
    })
  }


  deleteFromWishlist(book:any){
    let data =
    {
      wishListId : book.wishListId
    }
   
    console.log(book.wishListId)
    this.bookService.deleteFromWishList(data,this.token).subscribe((response:any)=>{
      console.log(response)
      
    })

  }
}
