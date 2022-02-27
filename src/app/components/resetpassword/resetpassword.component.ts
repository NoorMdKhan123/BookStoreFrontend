import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private userService: UserService){}

  resetPasswordForm!: FormGroup;
  submitted = true;
  token:any;


  ngOnInit(): void {
    this.resetPasswordForm = this.formBuilder.group({
      password: ['',[ Validators.required, Validators.minLength(6)]], 
      confirmPassword:  ['',[ Validators.required, Validators.minLength(6)]]
    });
    this.token=this.route.snapshot.paramMap.get('token');
    }
  
    onSubmit() { 
      this.submitted=true;
      if(this.resetPasswordForm.valid)
      {
        console.log(this.resetPasswordForm.value,this.token);
        let resetPassword={
          newPassword:this.resetPasswordForm.value.password,
          confirmPassword:this.resetPasswordForm.value.confirmPassword,       
       }
       this.userService.userResetPassword(resetPassword,this.token).subscribe((response:any)=>{
         console.log(response)
       })
      }
      else
      {
        console.log("invalid");
      }
    }
  }


