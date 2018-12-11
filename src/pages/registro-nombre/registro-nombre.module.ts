import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegistroNombrePage } from './registro-nombre';

@NgModule({
  declarations: [
    RegistroNombrePage,
  ],
  imports: [
    IonicPageModule.forChild(RegistroNombrePage),
  ],
})
export class RegistroNombrePageModule {}
