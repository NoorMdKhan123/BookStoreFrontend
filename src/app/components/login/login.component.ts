import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  token: any;
  loginForm!: FormGroup
  submitted = true;
  constructor(private formBuilder: FormBuilder, private userServices: UserService, private route : Router, private routeAct: ActivatedRoute) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.token=this.routeAct.snapshot.paramMap.get('token');
    console.log(this.token);
  
  }



  onSubmit() {
    this.submitted = true;

    if (this.loginForm.valid) {
      let data = {
        emailId: this.loginForm.value.email,
        password: this.loginForm.value.password
        
      }
      console.log(data)


      this.userServices.userLogin(data,this.token).subscribe((response: any) => {
        console.log(response)
        localStorage.setItem('token', response.result.token);
        console.log(this.token);
        this.route.navigateByUrl("/dashboard/books")

      })
    }
    else {
      console.log("Form is invalid")
    }
  }

}