import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { elementAt } from 'rxjs';
import { BookService } from 'src/app/service/book/book.service';
import { NgxStarRatingModule } from 'ngx-star-rating';

@Component({
  selector: 'app-bookview',
  templateUrl: './bookview.component.html',
  styleUrls: ['./bookview.component.scss']
})
export class BookviewComponent implements OnInit {
  BookId: any;
  data: any;
  token: any;
  feedback: any;
  value: any
  addTobag: boolean = true;
  feedbackdata:any;
  book_qty = 1;
  rating : any;
  starCount = 5;
  ratingArr : boolean[] =  []
  rating3!: number;
  


  constructor(private bookservice: BookService, private route: Router) {

    this.rating3 = 3;
  }    
      
  

  ngOnInit(): void {
   
    this.token = localStorage.getItem('token');
    this.BookId = localStorage.getItem('bookId');
    this.getBookByItsId();
    this.getAllFeedback();
    
  }

  getBookByItsId() {
    this.bookservice.getAllBooks(this.token).subscribe((response: any) => {
      response.book.forEach((element: any) => {
        console.log(element)
        if (element.bookId == this.BookId) {
          this.data = element;

        }
      });
    })
  }
  addTocart() {
    let data =
    {
      bookId: this.BookId,
      QtyToOrder: this.book_qty

    }
    this.bookservice.addBookToCart(data, this.token).subscribe((response: any) => {
      localStorage.setItem('token', response.result.token);
      console.log("book added to cart ::", response.result)
      console.log(response);
    }
    )
    this.route.navigateByUrl('/dashboard/getCart')
  }




  addToWishList() {
    let data =
    {
      bookId: this.BookId
    }
    this.bookservice.addToWishList(data, this.token).subscribe((response: any) => {
      console.log("book is in wishlist");
      console.log(response);
    }
    )
    this.route.navigateByUrl('/dashboard/wishlist')
  }
  starRating(data:any)
  {
    console.log(data.target.value)
    localStorage.setItem('currentBookRating',data.target.value)
    console.log(data.target.value);
   

  }

  addFeedback() {
    console.log(this.rating)
    let data = {
     
    bookId: this.BookId,
    rating:this.rating,
    comment: this.feedback
    
     }
    console.log(this.rating)
   
    this.bookservice.addFeedbackByBookId(data, this.token).subscribe((response: any) => {
      console.log(response)
      console.log(this.rating)
    })

  }


  getAllFeedback() {
    let data =
    {
      bookId: this.BookId,
    }
    this.bookservice.getAllFeedback(data, this.token).subscribe((response: any) => {
      console.log(response)
      console.log("all feedback", response)
      console.log("feedback of all the books")
      this.feedbackdata = response.result
      console.log("view all",this.feedbackdata)
    })

  }

 
}









