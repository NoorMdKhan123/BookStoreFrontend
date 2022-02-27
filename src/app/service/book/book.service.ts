import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  token: any;
  constructor(private httpService: HttpService) {
    this.token = localStorage.getItem("token")


  }
  getAllBooks(token: any) {
    let httpOptions =
    {
      headers: new HttpHeaders(
        {
          'Content-type': 'application/json',
          Authorization: 'Bearer ' + token

        }
      )
    }
    return this.httpService.getService('/Book', true, httpOptions)
  }

  addBookToCart(reqData:any, token:any)
  {
let httpOptions=
{
  
  headers : new HttpHeaders(
    {
      'Content-type':'application/json',
       Authorization :'Bearer ' + token
       
   
    }
  )
}
    console.log(reqData);
    return this.httpService.postService('/Cart/addingbooks'+reqData.bookId,reqData, true, httpOptions)
  }

  getAllCartBooks(token: any) {
    let httpOptions =
    {
      headers: new HttpHeaders(
        {
          'Content-type': 'application/json',
          Authorization: 'Bearer ' + token

        }
      )
    }
    return this.httpService.getService('/Cart', true, httpOptions)
  }

  addToWishList(data:any, token: any) {
    let httpOptions =
    {
      headers: new HttpHeaders(
        {
          'Content-type': 'application/json',
          Authorization: 'Bearer ' + token

        }
      )
    }
    return this.httpService.postService('/WishList'+data.bookId,data,true, httpOptions)
  }

  getAllWishList(token: any) {
    let httpOptions =
    {
      headers: new HttpHeaders(
        {
          'Content-type': 'application/json',
          Authorization: 'Bearer ' + token

        }
      )
    }
    return this.httpService.getService('/WishList', true, httpOptions)
  }

  deleteFromWishList(reqData:any, token : any)
  {
    let httpOptions=
    {
    headers : new HttpHeaders(
      {
        'Content-type':'application/json',
        Authorization : 'Bearer ' + token
      }
    )
    }
      console.log(reqData);
      console.log("token",token);
      return this.httpService.deleteService('/WishList/del/'+ reqData.wishListId,reqData, true, httpOptions)
  }


  

  deleteCartItem(reqData:any, token:any)
{
  let httpOptions=
  {
  headers : new HttpHeaders(
    {
      'Content-type':'application/json',
      Authorization : 'Bearer ' + token
    }
  )
  }
    console.log(reqData);
    console.log("token",token);
    console.log(reqData.cartId)
    return this.httpService.deleteService('/Cart/'+ reqData.cartId,reqData, true, httpOptions)
}

addFeedbackByBookId(data:any, token: any) {
  let httpOptions =
  {
    headers: new HttpHeaders(
      {
        'Content-type': 'application/json',
        Authorization: 'Bearer ' + token

      }
    )
  }
  return this.httpService.postService('/Feedback/'+data.bookId,data,true, httpOptions)
} 

placeOrder(data:any, token: any) {
  let httpOptions =
  {
    headers: new HttpHeaders(
      {
        'Content-type': 'application/json',
        Authorization: 'Bearer ' + token

      }
    )
  }
  return this.httpService.postService('/Orders',data,true, httpOptions)
}

getAllFeedback(data:any,token: any) {
  let httpOptions =
  {
    headers: new HttpHeaders(
      {
        'Content-type': 'application/json',
        Authorization: 'Bearer ' + token

      }
    )
  }
  return this.httpService.getService('/Feedback/feedback/'+data.bookId, true, httpOptions)
}


updateCartQty(reqData:any, token:any)
{
let httpOptions=
{

headers : new HttpHeaders(
  {
    'Content-type':'application/json',
     Authorization :'Bearer ' + token
     
 
  }
)
}
  console.log(reqData);
  return this.httpService.putService('/Cart/'+reqData.cartId,reqData, true, httpOptions)
}

}
