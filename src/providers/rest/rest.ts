import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage';
import { apiKey } from '../../app/apiurls/serverurls.js';
import { Http , Headers } from '@angular/http';


/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {

  urlApiRestLocal: string = 'http://localhost:8100/api';
  urlApiRest: string = 'https://lescuento.herokuapp.com';

  constructor(public storage: Storage, public http: Http) {
    console.log('Hello RestProvider Provider');
  }

  crearCuenta(detalles){
    return new Promise((resolve, reject)=> {

      let headers = new Headers();
      headers.append('Content-Type', 'application/json' );

      this.http.post(apiKey+'/users', JSON.stringify(detalles), {headers: headers})
      .subscribe(res => {
        let data = res.json();
        //this.token = data.token;
        //this.storage.set('token' , data.token);
        resolve(data);
      }, (err) => { 
            reject(err);
      });
    });
  }
  
  getURL(url:string) {
  if ( window.location.hostname === 'localhost:8100' ) {
  return this.urlApiRestLocal;
  } else {
  return this.urlApiRest;
  }
  }


}
