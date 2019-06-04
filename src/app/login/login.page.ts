import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordValidator } from '../validators/password.validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public email: string;
  public password: string;
  public loggedIn = false;

  public loginForm: FormGroup = this.formBuilder.group({
    email: [null, [Validators.required, Validators.email]],
    password: [null, [Validators.required, Validators.minLength(8), PasswordValidator.strong]]
  });

  constructor(public formBuilder: FormBuilder) {
  }

  ngOnInit() {
  }

  public login() {
    return true;
  }

}
