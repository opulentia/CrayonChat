import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { ChatPage } from '../pages/chat/chat';


let config = {
  apiKey: "AIzaSyB-Nq0FWziOkzF2S6O1lgHflbGN7JiDOnQ",
  authDomain: "crayonchat-d7916.firebaseapp.com",
  databaseURL: "https://crayonchat-d7916.firebaseio.com",
  projectId: "crayonchat-d7916",
  storageBucket: "crayonchat-d7916.appspot.com",
  messagingSenderId: "418039091617"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ChatPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ChatPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
