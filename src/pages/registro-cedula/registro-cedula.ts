import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform,AlertController } from 'ionic-angular';
import { RegistroGeneroPage } from '../registro-genero/registro-genero';
import { AudioProvider } from './../../providers/audio/audio';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { ChangeDetectorRef } from '@angular/core';
import { Storage } from '@ionic/storage';
import {Registro as Registro } from '../../app/app.config'
import { RestProvider } from '../../providers/rest/rest';
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


  constructor(private storage:Storage,public navCtrl: NavController, public navParams: NavParams, private registerService: RestProvider , private audio: AudioProvider,  public alertCtrl:  AlertController, private speechRecognition: SpeechRecognition, private plt: Platform, private cd: ChangeDetectorRef, private tts: TextToSpeech ) {
  this.textoCedula="";
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

    

  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroCedulaPage');
    this.audio.playAudio('../../assets/sounds/suIdentificacion.mp3');

    // setTimeout(()=> {
    //   this.startListening();
    //   },5000);
    //   setTimeout(()=> {
    //     this.completarTexto();
    //     this.tts.speak({
    //       text:  "Usted ha dicho " + this.textoCedula,
    //       locale: 'es-MX',
    //       rate: 1});
    //   },18000);
    
  }

  errorFunc(message){
    let alert = this.alertCtrl.create({
      title: 'Warining!',
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }
  cargarCedula(){
    this.storage.set(Registro.cedula, this.textoCedula);
    this.storage.get(Registro.cedula).then((valCedula) => {
      console.log("la variable cedula tiene: ", valCedula);
  
   });
  }
  goBack():void {
    this.navCtrl.pop();

  }

  goGenero():void{
    this.navCtrl.push(RegistroGeneroPage);

  }



}
