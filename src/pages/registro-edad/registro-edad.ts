import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegistroCedulaPage } from '../registro-cedula/registro-cedula';

/**
 * Generated class for the RegistroEdadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro-edad',
  templateUrl: 'registro-edad.html',
})
export class RegistroEdadPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroEdadPage');
  }

  goCedula():void{
    this.navCtrl.push(RegistroCedulaPage);
  }

  goBack():void {
    this.navCtrl.pop();
  }

}
