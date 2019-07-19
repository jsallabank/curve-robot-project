import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordValidator } from '../../validators/password.validator';
import { FormService } from '../../services/form/form.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public loggedIn = false;
  public errors: any = [];
  public loginForm: FormGroup;

  constructor(public formBuilder: FormBuilder, public form: FormService) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8), PasswordValidator.strong]]
    });
  }

  public validate() {
    this.errors = [];
    this.errors = this.form.validate(this.loginForm.controls);
  }

  public login() {
    console.error('Add your function here');
    return true;
  }

}
