import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AudioProvider } from './../../providers/audio/audio';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private audio: AudioProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroCiudadPage');
  }

  goBack():void {
    this.navCtrl.pop();
  }

  suCiudad() {
    this.audio.playAudio('../../assets/sounds/suCiudad.mp3');
  }

}
