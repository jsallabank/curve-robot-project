import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable()
export class AlertService {

  public cssClass = '';

  constructor(public alertCtrl: AlertController) {
    console.log('Hello AlertService Service');
  }

  public populateAlert(header: string, subHeader: string, message: string, button: string) {
    const alert: any = {};
    alert.header = header;
    alert.subHeader = subHeader;
    alert.message = message;
    alert.buttons = [button];
    return alert;
  }

  public async presentAlert(header: string, subHeader: string, message: string, button: string) {
    const properties: HTMLIonAlertElement = this.populateAlert(header, subHeader, message, button);
    const alert = await this.alertCtrl.create(properties);
    await this.present(alert);
  }

  public async presentConfirmation(header: string, subHeader: string, message: string): Promise<any> {
    return new Promise(async (resolve) => {
      const alert = await this.alertCtrl.create({
        header,
        subHeader,
        message,
        buttons: [
          {
            text: 'No',
            role: 'cancel',
            cssClass: this.cssClass,
            handler: /* istanbul ignore next  */ () => { resolve({ option: false }); }
          },
          {
            text: 'Yes',
            cssClass: this.cssClass,
            handler: /* istanbul ignore next  */ () => { resolve({ option: true }); }
          }
        ]
      });
      await this.present(alert);
    });
  }

  /* istanbul ignore next */
  public async present(alert: HTMLIonAlertElement) {
    await alert.present();
  }

}
