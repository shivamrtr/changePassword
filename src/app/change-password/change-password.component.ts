import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms'
import { PasswordValidators } from './password.validators';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {

  form = new FormGroup({
    oldPassword: new FormControl('',
    Validators.required,
    PasswordValidators.validOldPassword),
    newPassword: new FormControl('',Validators.required,),
    confirmPassword: new FormControl('',Validators.required,)},
    {
      validators: PasswordValidators.passwordShouldMatch
    });
}


 

