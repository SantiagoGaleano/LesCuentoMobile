import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegistroApellidoPage } from './registro-apellido';

@NgModule({
  declarations: [
    RegistroApellidoPage,
  ],
  imports: [
    IonicPageModule.forChild(RegistroApellidoPage),
  ],
})
export class RegistroApellidoPageModule {}
