import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordValidator } from '../../validators/password.validator';
import { FormService } from '../../services/form/form.service';
import { StringValidator } from '../../validators/string.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  public errors: any = [];
  public registerForm: FormGroup;

  constructor(public formBuilder: FormBuilder, public form: FormService) {
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8), PasswordValidator.strong]],
      confirmPassword: [null, []],
      firstName: [null, [Validators.required, Validators.maxLength(50), StringValidator.empty]],
      lastName: [null, [Validators.required, Validators.maxLength(50), StringValidator.empty]]
    });
  }

  public validate() {
    this.errors = [];
    this.errors = this.form.validate(this.registerForm.controls);
  }

  public register() {
    console.error('Add your function here');
    return true;
  }

}
