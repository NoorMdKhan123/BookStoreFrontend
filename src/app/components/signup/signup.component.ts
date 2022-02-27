import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  registrationForm!:FormGroup;
  submitted = true;

  constructor(private formBuilder: FormBuilder, private  userService:UserService , private route:Router) { }

  ngOnInit(): void {
    
    this.registrationForm = this.formBuilder.group({
      fullName: ['',Validators.required],
      email: ['',Validators.required],
      password: ['',Validators.required],
      mobileNo: ['',Validators.required]
      
    })
  }
  

  onSubmit(){
    this.submitted = true;

    if (this.registrationForm.valid) {
      let data={
       fullName: this.registrationForm.value.fullName,
        emailId: this.registrationForm.value.email,
        password: this.registrationForm.value.password,
        mobileNumber: this.registrationForm.value.mobileNo,
        
      }
      

        this.userService.userRegistration(data).subscribe((response:any)=>{
          console.log(response)
        })
       }
       else
       {
         console.log("invalid");
       }
     }
     

}
    
