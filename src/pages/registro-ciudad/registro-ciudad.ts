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

     this.storage.set(Registro.ciudad, this.textoCiudad);

  }




  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroCiudadPage');
    this.audio.playAudio('../../assets/sounds/suCiudad.mp3');
    // setTimeout(()=> {
    //   this.startListening();
    //   },5000);
    //   setTimeout(()=> {
    //     this.completarTexto();
    //     this.tts.speak({
    //       text:  "Usted ha dicho " + this.textoCiudad,
    //       locale: 'es-MX',
    //       rate: 1});
    //   },16000);
    this.storage.get(Registro.nombre).then((valNombre) => {
      this.nombreInser=valNombre;
   });

   this.storage.get(Registro.apellido).then((valApellido) => {
    this.apellidoInser=valApellido;

 });
 this.storage.get(Registro.cedula).then((valCedula) => {
  this.cedulaInser=valCedula;
  console.log('El nombre de la cedula ', this.cedulaInser);

});

this.storage.get(Registro.genero).then((valGenero) => {
  this.generoInser=valGenero;
  console.log('El nombre del genero', this.generoInser);

});

this.storage.get(Registro.edad).then((valEdad) => {
  this.edadInser=valEdad;
  console.log('El nombre de la edad ', this.edadInser);

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
          cedula: this.textoCiudad
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




        let credentials = {
          nombres:this.nombreInser,
          apellidos:this.apellidoInser,
          edad:this.edadInser,
          cedula:this.cedulaInser,
          genero:this.generoInser,
          ciudad:this.ciudadInser




        };


         this.registerService.crearCuenta(credentials).then((result) => {
            console.log(result);








        }, (err) => {

            console.log(err);
            this. errorFunc('Wrong credentials ! try again')
            console.log("credentials: "+ JSON.stringify(credentials))


        });

      }



  goBack():void {
    this.navCtrl.pop();
  }


}
