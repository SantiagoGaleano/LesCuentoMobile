import { RegistroApellidoPage } from './../pages/registro-apellido/registro-apellido';
import { RegistroCiudadPage } from './../pages/registro-ciudad/registro-ciudad';
import { RegistroEdadPage } from './../pages/registro-edad/registro-edad';

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

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
    LottieAnimationViewModule.forRoot()

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

  ]
})
export class AppModule {}
