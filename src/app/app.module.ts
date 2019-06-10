import { NgModule, Injectable, ErrorHandler, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import * as Sentry from '@sentry/browser';
import { AlertProvider } from './providers/alert/alert';
import { AuthenticationProvider } from './providers/authentication/authentication';
import { FormProvider } from './providers/form/form';
import { ConnectProvider } from './providers/connect/connect';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';

const isDevModeOn = isDevMode();

Sentry.init({
  // ****************** REPLACE DSN
  // dsn: 'https://c75cf7e4e58e4d88bdc8e53e8d03f399@sentry.io/1471077'
});

@Injectable()
export class SentryErrorHandler implements ErrorHandler {
  constructor() { }
  handleError(error) {
    const eventId = Sentry.captureException(error.originalError || error);
    Sentry.showReportDialog({ eventId });
  }
}

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    IonicStorageModule.forRoot({
      name: '_BoilerPlate',
      driverOrder: ['sqlite', 'indexeddb', 'websql', 'localstorage'],
    })
  ],
  providers: [
    { provide: ErrorHandler, useClass: isDevModeOn ? ErrorHandler : SentryErrorHandler },
    AlertProvider,
    AuthenticationProvider,
    FormProvider,
    ConnectProvider,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
