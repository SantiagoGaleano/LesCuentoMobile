import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { RegistroCedulaPage } from '../registro-cedula/registro-cedula';
import { AudioProvider } from './../../providers/audio/audio';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { ChangeDetectorRef } from '@angular/core';
/**
 * Generated class for the RegistroEdadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro-edad',
  templateUrl: 'registro-edad.html',
})
export class RegistroEdadPage {
  matches: String[];
  isRecording = false;
  textoEdad: any;

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
    this.textoEdad = "";
     for (let index of this.matches) {
       this.textoEdad = index;
     }
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroEdadPage');
    this.audio.playAudio('../../assets/sounds/suEdad.mp3');

    setTimeout(()=> {
      this.startListening();
      },5000);
      setTimeout(()=> {
        this.completarTexto();
        this.tts.speak({
          text:  "Usted ha dicho " + this.textoEdad,
          locale: 'es-MX',
          rate: 1});
      },12000);
  }

  goCedula():void{
    this.navCtrl.push(RegistroCedulaPage);
  }

  goBack():void {
    this.navCtrl.pop();
  }



}
