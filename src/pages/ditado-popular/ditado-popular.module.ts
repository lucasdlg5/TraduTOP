import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DitadoPopularPage } from './ditado-popular';

@NgModule({
  declarations: [
    DitadoPopularPage,
  ],
  imports: [
    IonicPageModule.forChild(DitadoPopularPage),
  ],
})
export class DitadoPopularPageModule {}
