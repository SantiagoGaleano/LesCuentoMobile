import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform ,AlertController} from 'ionic-angular';
import { AudioProvider } from './../../providers/audio/audio';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { ChangeDetectorRef } from '@angular/core';
import { Storage } from '@ionic/storage';
import {Registro as Registro } from '../../app/app.config'
import { RestProvider } from '../../providers/rest/rest';


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


  constructor(private storage:Storage,public navCtrl: NavController, public navParams: NavParams, private registerService: RestProvider , private audio: AudioProvider,  public alertCtrl:  AlertController, private speechRecognition: SpeechRecognition, private plt: Platform, private cd: ChangeDetectorRef, private tts: TextToSpeech ) {
  this.nombreInser ='';
  this.apellidoInser= '';
  this.edadInser='';
  this.generoInser='';
  this.cedulaInser='';
  this.ciudadInser='';

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


    this.nombreInser.localStorage.getItem("nombres");
    console.log("dato: ", this.nombreInser);
  }



  saveCiudad(){
    this.storage.set(this.key, this.textoCiudad);
  }

  loadCiudad(){
    this.storage.get(this.key).then((val) =>{
        console.log('Tu ciudad es', val);
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
          nombres: "",
          apellidos:"",
          edad:"",
          cedula: "",
          genero:"",
          ciudad_muni: this.textoCiudad,
        };


         this.registerService.crearCuenta(credentials).then((result) => {
            console.log(result);
            this.storage.set(Registro.ciudad, this.textoCiudad);
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
