import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'app-fogotpassword',
  templateUrl: './fogotpassword.component.html',
  styleUrls: ['./fogotpassword.component.scss']
})
export class FogotpasswordComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private userService: UserService) { }
  forgotPasswordForm!: FormGroup;
  submitted = true;

  ngOnInit(): void {
    this.forgotPasswordForm = this.formBuilder.group({
      email: ['', Validators.required],
      
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.forgotPasswordForm.valid) {
      console.log(this.forgotPasswordForm.value);
      let forgotPassword = {
        email: this.forgotPasswordForm.value.email,
      

      }
      this.userService.userForgotPassword(forgotPassword).subscribe((response: any) => {
        console.log(response)
      })
    }
    else {
      console.log("invalid");
    }
  }

}
