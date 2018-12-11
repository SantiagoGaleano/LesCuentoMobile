import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegistroEdadPage } from '../registro-edad/registro-edad';
import { AudioProvider } from './../../providers/audio/audio';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private audio: AudioProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroApellidoPage');
  }

  goEdad():void {
    this.navCtrl.push(RegistroEdadPage);
  }

  goBack():void {
    this.navCtrl.pop();
  }

  suApellido(){
    this.audio.playAudio('../../assets/sounds/suApellido.mp3');
  }

}
