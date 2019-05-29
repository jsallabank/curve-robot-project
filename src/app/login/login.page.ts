import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public email: string;
  public password: string;
  public loggedIn = false;

  constructor() { }

  ngOnInit() {
  }

  public login() {
    this.loggedIn = true;
    console.log('Logged in.');
  }

}
