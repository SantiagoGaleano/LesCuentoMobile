import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegistroApellidoPage } from '../registro-apellido/registro-apellido';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroNombrePage');
  }

  goApellido():void{
    this.navCtrl.push(RegistroApellidoPage);
  }

}
