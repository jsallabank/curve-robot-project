import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormProvider } from '../providers/form/form';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  public errors: any = [];
  public forgotForm: FormGroup;

  constructor(public formBuilder: FormBuilder, public form: FormProvider) {
  }

  ngOnInit() {
    this.forgotForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]]
    });
  }

  public validate() {
    this.errors = [];
    this.errors = this.form.validate(this.forgotForm.controls);
  }

  public reset() {
    console.error('Add your function here');
    return true;
  }

}
