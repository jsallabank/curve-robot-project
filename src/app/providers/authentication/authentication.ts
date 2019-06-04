import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class AuthenticationProvider {

  public token: string = null;

  constructor(public storage: Storage) {
    console.log('Hello AuthenticationProvider Provider');
  }

  public setToken(): Promise<boolean> {
    return new Promise((resolve) => {
      this.storage.get('access_token').then((token) => {
        if (token == null) {
          this.token = null;
          resolve(false);
        } else {
          this.token = token;
          resolve(true);
        }
      });
    });
  }

  public getToken() {
    return this.token;
  }

  public isAuthenticated() {
    if (this.token == null) {
      return false;
    }
    return true;
  }

}
