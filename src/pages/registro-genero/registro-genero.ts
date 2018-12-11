import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegistroCiudadPage } from '../registro-ciudad/registro-ciudad';

/**
 * Generated class for the RegistroGeneroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro-genero',
  templateUrl: 'registro-genero.html',
})
export class RegistroGeneroPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroGeneroPage');
  }

  goBack():void{
    this.navCtrl.pop();

  }

  goCiudad():void {
    this.navCtrl.push(RegistroCiudadPage);
  }

}
