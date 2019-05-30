import { Component, OnInit, isDevMode } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public email: string;
  public password: string;
  public loggedIn = false;

  constructor() {
  }

  ngOnInit() {
  }

  public login() {
    this.loggedIn = true;
    console.log('Logged in.');
    const devmode = isDevMode() ? 'true' : 'false';
    const message = `Something bad happened ${devmode}`;
    console.log(message);
    throw new Error(message);
  }

}
