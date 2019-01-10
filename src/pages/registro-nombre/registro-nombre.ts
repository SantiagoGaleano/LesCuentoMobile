import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Platform,AlertController } from 'ionic-angular';
import { RegistroApellidoPage } from '../registro-apellido/registro-apellido';
import { AudioProvider } from './../../providers/audio/audio';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { ChangeDetectorRef } from '@angular/core';
import { RestProvider } from '../../providers/rest/rest';


/**
 * Generated class for the RegistroNombrePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro-nombre',
  templateUrl: 'registro-nombre.html',
})
export class RegistroNombrePage {
  matches: String[];
  isRecording = false;
  textoNombre: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private registerService: RestProvider , private audio: AudioProvider,  public alertCtrl:  AlertController, private speechRecognition: SpeechRecognition, private plt: Platform, private cd: ChangeDetectorRef, private tts: TextToSpeech ) {
  }

  isIos() {
    return this.plt.is('ios');
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

  // completarTexto(){
  //   this.textoNombre = "";
  //    for (let index of this.matches) {
  //      this.textoNombre += index;
  //    }
  // }



  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroNombrePage');


    this.getPermission();
    this.audio.playAudio('../../assets/sounds/respondaAhora.mp3');

    let audioNombre = setTimeout(()=> {
      this.audio.playAudio('../../assets/sounds/suNombre.mp3');
    },7000);
    setTimeout(()=> {
    
    },11000);
    // setTimeout(()=> {
    //   this.completarTexto();
    //   this.tts.speak({
    //     text:  "Usted ha dicho " + this.textoNombre ,
    //     locale: 'es-MX',
    //     rate: 1});
    // },17000);



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
 
    if (this.textoNombre.trim() ) {    
      
      console.log(this.textoNombre.trim() )
       
      if (this.textoNombre.trim()  === '') {
        this.errorFunc('Por favor diga su nombre de nuevo')
 
      }else{
 
        let credentials = {
          nombres: this.textoNombre 
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
   

}

  goApellido():void{
    this.navCtrl.push(RegistroApellidoPage);
    
  }
  goBack():void {
    this.navCtrl.pop();
  }



}
