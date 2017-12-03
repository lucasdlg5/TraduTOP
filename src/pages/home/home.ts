import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {}

  goToProfile(): void {
    this.navCtrl.push('ProfilePage');
  }

  goToCreate(): void {
    this.navCtrl.push('EventCreatePage');
  }

  goToList(): void {
    this.navCtrl.push('EventListPage');
  }

  goGirias(): void {
    this.navCtrl.push ('GiriasPage')
  }

  goPhrasal(): void {
    this.navCtrl.push ('PhrasalVerbsPage')
  }

  goExpressao(): void {
    this.navCtrl.push ('ExpressaoIdiomaticaPage')
  }

  goDitado(): void {
    this.navCtrl.push ('DitadoPopularPage')
  }


}
