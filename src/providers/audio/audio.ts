import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the AudioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AudioProvider {
  public  audio=new Audio();


  constructor(public http: HttpClient) {
    console.log('Hello AudioProvider Provider');
  }

  playAudio(audio.src) {

    this.audio.load();
   this.audio.play();

  }

  stopAudio(){

  }

}
