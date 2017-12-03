import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ExpressaoIdiomaticaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-expressao-idiomatica',
  templateUrl: 'expressao-idiomatica.html',
})
export class ExpressaoIdiomaticaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goExpressao(): void {
this.navCtrl.push("ExpressaoIdiomaticaPage");
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExpressaoIdiomaticaPage');
  }

}
