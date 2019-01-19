import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { RegistroGeneroPage } from '../registro-genero/registro-genero';
import { AudioProvider } from './../../providers/audio/audio';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { ChangeDetectorRef } from '@angular/core';
import { Storage } from '@ionic/storage';
import {Registro as Registro } from '../../app/app.config'
/**
 * Generated class for the RegistroCedulaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro-cedula',
  templateUrl: 'registro-cedula.html',
})
export class RegistroCedulaPage {
  matches: String[];
  isRecording = false;
  textoCedula: any;


  constructor(private storage:Storage,public navCtrl: NavController, public navParams: NavParams,private audio: AudioProvider, private speechRecognition: SpeechRecognition, private plt: Platform, private cd: ChangeDetectorRef, private tts: TextToSpeech ) {
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
    this.textoCedula = "";
     for (let index of this.matches) {
       this.textoCedula = index;
     }

     this.storage.set(Registro.cedula, this.textoCedula);

  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroCedulaPage');
    this.audio.playAudio('../../assets/sounds/suIdentificacion.mp3');

    setTimeout(()=> {
      this.startListening();
      },5000);
      setTimeout(()=> {
        this.completarTexto();
        this.tts.speak({
          text:  "Usted ha dicho " + this.textoCedula,
          locale: 'es-MX',
          rate: 1});
      },18000);

  }

  goBack():void {
    this.navCtrl.pop();

  }

  goGenero():void{
    this.navCtrl.push(RegistroGeneroPage);

  }



}
