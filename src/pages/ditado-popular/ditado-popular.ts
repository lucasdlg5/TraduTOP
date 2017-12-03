import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DitadoPopularPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ditado-popular',
  templateUrl: 'ditado-popular.html',
})
export class DitadoPopularPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goExpressao(): void {
this.navCtrl.push("DitadoPopularPage");
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad DitadoPopularPage');
  }

}
