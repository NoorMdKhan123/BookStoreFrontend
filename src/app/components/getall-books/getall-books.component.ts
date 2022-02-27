import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/service/book/book.service';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'app-getall-books',
  templateUrl: './getall-books.component.html',
  styleUrls: ['./getall-books.component.scss']
})
export class GetallBooksComponent implements OnInit {

  token:any;
Booklist:any;
countBooks: any;
totalLength: any;
page: number = 1;

  constructor( private router: Router, private userService: UserService, private bookService : BookService) { }

  ngOnInit(): void {
    this.token=localStorage.getItem('token');
    this.getAllBooks()
  }
  getAllBooks() { 
    this.bookService.getAllBooks(this.token).subscribe((response:any)=>{
      this.Booklist= response.book
      console.log(this.Booklist);
       this.totalLength = response.book.length
        this.countBooks = response.book.length
        console.log(this.countBooks) 
      
    })
    } 
    
    lowTohigh(){
      this.Booklist = this.Booklist.sort((low: any, high: any) => low.discountPrice - high.discountPrice);
    }
  
    highTolow(){
      this.Booklist = this.Booklist.sort((low: any, high: any) => high.discountPrice - low.discountPrice);
    }
  
    newArrivals(){
      this.Booklist.reverse();
    }

    view(book:any){
      localStorage.setItem('bookId', book.bookId);
      console.log("id", book.bookId);
      this.router.navigateByUrl('/dashboard/bookview/' + book.bookId)
    }
  }