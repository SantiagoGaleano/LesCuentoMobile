import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegistroGeneroPage } from '../registro-genero/registro-genero';

/**
 * Generated class for the RegistroCedulaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro-cedula',
  templateUrl: 'registro-cedula.html',
})
export class RegistroCedulaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroCedulaPage');
  }

  goBack():void {
    this.navCtrl.pop();

  }

  goGenero():void{
    this.navCtrl.push(RegistroGeneroPage);

  }

}
