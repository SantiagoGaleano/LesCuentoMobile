import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { AudioProvider } from './../../providers/audio/audio';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the WelcomeMiescuelaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome-miescuela',
  templateUrl: 'welcome-miescuela.html',
})
export class WelcomeMiescuelaPage {

  public lottieConfig: Object;

  private anim: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private audio: AudioProvider) {
    this.lottieConfig = {
      path: 'assets/inicio.json',
      autoplay:true,
      loop:false
  }

  // let audio = new Audio();
  //   audio.src = "../../assets/sounds/cabezote.mp3";
  //   audio.load();
  //   audio.play();

  this.audio.playAudio('../../assets/sounds/cabezote.mp3');
}

  ionViewDidLoad() {
    // console.log('ionViewDidLoad WelcomeMiescuelaPage');
    let time= 11000;
    let cambioPagina = setTimeout( () => {
      this.navCtrl.push(HomePage);
     // somecode
}, time);
  }



  handleAnimation(anim: any) {
    this.anim=anim;
  }

}
