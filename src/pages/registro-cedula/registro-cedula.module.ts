import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegistroCedulaPage } from './registro-cedula';

@NgModule({
  declarations: [
    RegistroCedulaPage,
  ],
  imports: [
    IonicPageModule.forChild(RegistroCedulaPage),
  ],
})
export class RegistroCedulaPageModule {}
