import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegistroApellidoPage } from '../registro-apellido/registro-apellido';
import { AudioProvider } from './../../providers/audio/audio';

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

  constructor(public navCtrl: NavController, public navParams: NavParams,private audio: AudioProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroNombrePage');
    this.audio.playAudio('../../assets/sounds/respondaAhora.mp3');
  }

  suNombre(){
    this.audio.playAudio('../../assets/sounds/suNombre.mp3');
  }

  goApellido():void{
    this.navCtrl.push(RegistroApellidoPage);
  }
  goBack():void {
    this.navCtrl.pop();
  }

}
