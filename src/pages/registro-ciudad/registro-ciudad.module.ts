import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegistroCiudadPage } from './registro-ciudad';

@NgModule({
  declarations: [
    RegistroCiudadPage,
  ],
  imports: [
    IonicPageModule.forChild(RegistroCiudadPage),
  ],
})
export class RegistroCiudadPageModule {}
