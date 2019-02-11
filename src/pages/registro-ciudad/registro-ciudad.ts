import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform ,AlertController} from 'ionic-angular';
import { AudioProvider } from './../../providers/audio/audio';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { ChangeDetectorRef } from '@angular/core';
import { Storage } from '@ionic/storage';
import {Registro as Registro } from '../../app/app.config'
import { RestProvider } from '../../providers/rest/rest';

import { Geolocation } from '@ionic-native/geolocation';

/**
 * Generated class for the RegistroCiudadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro-ciudad',
  templateUrl: 'registro-ciudad.html',
})
export class RegistroCiudadPage {

  nombreInser: any;
  apellidoInser:any;
  edadInser:any;
  generoInser:any;
  cedulaInser:any;
  ciudadInser:any;
  matches: String[];
  isRecording = false;
  textoCiudad: any;
  key:string = 'ciudad_muni';

  nlatitude: number;
  nlongitude: number;

  constructor(private storage:Storage,public navCtrl: NavController, public navParams: NavParams, private registerService: RestProvider , private audio: AudioProvider,  public alertCtrl:  AlertController, private speechRecognition: SpeechRecognition, private plt: Platform, private cd: ChangeDetectorRef, private tts: TextToSpeech, private geolocation: Geolocation) {


    plt.ready().then(() => {

      geolocation.getCurrentPosition().then((data) => {
        this.nlatitude = data.coords.latitude;
        this.nlongitude = data.coords.longitude;
      });

    });
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
    this. textoCiudad = "";
     for (let index of this.matches) {
       this. textoCiudad = index;
     }

     

  }




  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroCiudadPage');
    this.audio.playAudio('../../assets/sounds/suCiudad.mp3');
    
    this.loadCiudad();
    setTimeout(()=> {
      this.startListening();
      },5000);
      setTimeout(()=> {
        this.completarTexto();
        this.tts.speak({
          text:  "Usted ha dicho " + this.textoCiudad,
          locale: 'es-MX',
          rate: 1});
     },18000);

     


  }



  saveCiudad(){
    this.storage.set(this.key, this.textoCiudad);
  }

  loadCiudad(){
    


    this.storage.get("nombres").then((val) =>{
      this.nombreInser=val;
      console.log('Tu nombre es', val);
  });

    this.storage.get("apellidos").then((val) =>{
      this.apellidoInser=val;
      console.log('Tu apellido es', val);
  });

  this.storage.get("edad").then((val) =>{
    this.edadInser=val;
    console.log('Tu edad es', val);
  });

  this.storage.get("cedula").then((val) =>{
    this.cedulaInser=val;
    console.log('Tu cedula es', val);
  });

  this.storage.get("genero").then((val) =>{
    this.generoInser=val;
    console.log('Tu genero es', val);
  });
    
  }

  errorFunc(message){
    let alert = this.alertCtrl.create({
      title: 'Warining!',
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }

  myRegister(){
    

    if (this.textoCiudad.trim() ) {    

      console.log(this.textoCiudad.trim() )

      if (this.textoCiudad.trim()  === '') {
        this.errorFunc('Por favor diga su nombre de nuevo')

      }else{

        let credentials = {
          nombres: this.nombreInser,
          apellidos:this.apellidoInser,
          edad:this.edadInser,
          cedula: this.cedulaInser,
          genero:this.generoInser,
          ciudad_muni: this.textoCiudad,
          latitud: this.nlatitude,
          longitud: this.nlongitude,
        };


         this.registerService.crearCuenta(credentials).then((result) => {
            console.log(result);
           
        }, (err) => {

            console.log(err);
            this. errorFunc('Wrong credentials ! try again')
            console.log("credentials: "+ JSON.stringify(credentials))

        });

      }

   }

   

    

 this.storage.get(Registro.ciudad).then((valCiudad) => {
   this.ciudadInser=valCiudad;
  console.log('El nombre de la ciudad  ', valCiudad);

});




        
      }



  goBack():void {
    this.navCtrl.pop();
  }


}
