import { RegistroNombrePage } from './../registro-nombre/registro-nombre';
import { AudioProvider } from './../../providers/audio/audio';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as $ from 'jquery';
import {  AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs-compat';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  public lottieConfig: Object;
  public lottieConfig2: Object;
  private anim: any;

   items: Observable<any[]>;

  constructor(
    public navCtrl: NavController,
    private audio: AudioProvider,
    afDB: AngularFireDatabase
  ) {

     this.items=afDB.list('intro').valueChanges();



    // this.lottieConfig = {
    //   path: 'https://lescuento-20dac.firebaseio.com/intro',
    //   autoplay:true



    // };
    // this.lottieConfig2 = {
    //   path: 'assets/AlbaFinal.json',
    //   autoplay:true,
    //   loop:true


    // };

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
