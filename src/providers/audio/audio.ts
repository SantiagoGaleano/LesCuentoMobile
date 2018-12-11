import { Injectable } from '@angular/core';

/*
  Generated class for the AudioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AudioProvider {
  public  audio: HTMLAudioElement;


  constructor() {
    console.log('Hello AudioProvider Provider');
  }

  playAudio(src: string) {
    this.audio = new Audio(src);
    this.audio.load();
    this.audio.play();
    // así debería funcionar
  }

  stopAudio(){
    this.audio.pause();
    this.audio.currentTime = 0;

  }

}
