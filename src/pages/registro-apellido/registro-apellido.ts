import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { RegistroEdadPage } from '../registro-edad/registro-edad';
import { AudioProvider } from './../../providers/audio/audio';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { ChangeDetectorRef } from '@angular/core';

/**
 * Generated class for the RegistroApellidoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro-apellido',
  templateUrl: 'registro-apellido.html',
})
export class RegistroApellidoPage {
  matches: String[];
  isRecording = false;
  textoApellidos: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private audio: AudioProvider, private speechRecognition: SpeechRecognition, private plt: Platform, private cd: ChangeDetectorRef, private tts: TextToSpeech ) {
  }

  stopListening() {
    this.speechRecognition.stopListening().then(() => {
      this.isRecording = false;
    });
  }

  getPermission() {
    this.speechRecognition.hasPermission()
      .then((hasPermission: boolean) => {
        if (!hasPermission) {
          this.speechRecognition.requestPermission();
        }
      });
  }

  startListening() {
    this.speechRecognition.hasPermission()
    .then((hasPermission: boolean) => {
      if (!hasPermission) {
        this.speechRecognition.requestPermission();
      }
    });


    let options = {
      language: 'es-MX'
    }
    this.speechRecognition.startListening(options).subscribe(matches => {
      this.matches = matches;
      this.cd.detectChanges();
    });
    this.isRecording = true;


  }

  completarTexto(){
    this.textoApellidos = "";
     for (let index of this.matches) {
       this.textoApellidos = index;
     }
  }




  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroApellidoPage');
       this.audio.playAudio('../../assets/sounds/suApellido.mp3');

      setTimeout(()=> {
      this.startListening();
      },5000);
      setTimeout(()=> {
        this.completarTexto();
        this.tts.speak({
          text:  "Usted ha dicho " + this.textoApellidos,
          locale: 'es-MX',
          rate: 1});
      },16000);

  }

  goEdad():void {
    this.navCtrl.push(RegistroEdadPage);
  }

  goBack():void {
    this.navCtrl.pop();
  }



}
