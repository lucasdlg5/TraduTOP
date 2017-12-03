import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PhrasalVerbsPage } from './phrasal-verbs';

@NgModule({
  declarations: [
    PhrasalVerbsPage,
  ],
  imports: [
    IonicPageModule.forChild(PhrasalVerbsPage),
  ],
})
export class PhrasalVerbsPageModule {}
