import { RegistroNombrePage } from './../registro-nombre/registro-nombre';
import { AudioProvider } from './../../providers/audio/audio';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as $ from 'jquery';
<<<<<<< HEAD


=======
import {  AngularFireDatabase } from 'angularfire2/database';
>>>>>>> d8af934d998e0b03a079000bcb308e6b845de487
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  public lottieConfig: Object;
  public lottieConfig2: Object;
  private anim: any;

  constructor(
    public navCtrl: NavController,
    private audio: AudioProvider
  ) {



    this.lottieConfig = {
<<<<<<< HEAD
      path:'assets/AlbaIntro.json' ,
=======
      path: 'https://firebasestorage.googleapis.com/v0/b/lescuento-20dac.appspot.com/o/AlbaIntro.json?alt=media&token=8df0b77b-1782-4c32-a67a-b2a93a98c7f7',
>>>>>>> d8af934d998e0b03a079000bcb308e6b845de487
      autoplay:true



    };
    this.lottieConfig2 = {
      path: 'assets/AlbaFinal.json',
      autoplay:true,
      loop:true


    };

  //  let  audio=new Audio();
  //   audio.src = "../../assets/sounds/alba.mp3";
  //   audio.load();
  //   audio.play();
    this.audio.playAudio('../../assets/sounds/alba.mp3');





  $(document).ready(function() {

          setTimeout(function() {
          $(".divContent").fadeIn(1000);
      },12000);
  });

  $(document).ready(function() {

    setTimeout(function() {
    $(".divAnimationIntro").hide();
    $(".divAnimationFinal").show();
},23000);
});






  }
  handleAnimation(anim: any) {
    this.anim=anim;
  }

  goNombre():void {
    this.audio.stopAudio();
    this.navCtrl.push(RegistroNombrePage);
  }







}
