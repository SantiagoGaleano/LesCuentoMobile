import { RegistroApellidoPage } from './../pages/registro-apellido/registro-apellido';
import { RegistroCiudadPage } from './../pages/registro-ciudad/registro-ciudad';
import { RegistroEdadPage } from './../pages/registro-edad/registro-edad';

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { WelcomeMiescuelaPage } from './../pages/welcome-miescuela/welcome-miescuela';

import { LottieAnimationViewModule } from 'ng-lottie';
import { RegistroNombrePage } from '../pages/registro-nombre/registro-nombre';

import { RegistroCedulaPage } from '../pages/registro-cedula/registro-cedula';
import { RegistroGeneroPage } from '../pages/registro-genero/registro-genero';
import { AudioProvider } from '../providers/audio/audio';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { RestProvider } from '../providers/rest/rest';
import { NativeStorage } from '@ionic-native/native-storage';
import { Geolocation } from '@ionic-native/geolocation';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';

export const firebaseConfig = {
  apiKey: "AIzaSyAkfpqWUDDL06j-uJbrmTWWD1-WRpbAAqg",
    authDomain: "lescuento-20dac.firebaseapp.com",
    databaseURL: "https://lescuento-20dac.firebaseio.com",
    projectId: "lescuento-20dac",
    storageBucket: "lescuento-20dac.appspot.com",
    messagingSenderId: "565201867851"
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    WelcomeMiescuelaPage,
    RegistroApellidoPage,
    RegistroNombrePage,
    RegistroEdadPage,
    RegistroCedulaPage,
    RegistroGeneroPage,
    RegistroCiudadPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    LottieAnimationViewModule.forRoot(),
    IonicStorageModule.forRoot(),
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig,'lescuento'),
    AngularFireDatabaseModule,
    AngularFireAuthModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    WelcomeMiescuelaPage,
   RegistroApellidoPage,
    RegistroNombrePage,
    RegistroEdadPage,
    RegistroCedulaPage,
    RegistroGeneroPage,
    RegistroCiudadPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SpeechRecognition,
    TextToSpeech,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AudioProvider,
    RestProvider,
    NativeStorage,
    Geolocation,
    AngularFireDatabase
  ]
})
export class AppModule {}
