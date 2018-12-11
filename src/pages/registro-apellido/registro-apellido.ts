import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegistroEdadPage } from '../registro-edad/registro-edad';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
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

}
