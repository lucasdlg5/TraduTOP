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
  ditadoItems: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.ditadoItems = [
      {
    		id_ditado: "1",
    		titulo: "Put the horses before the cars",
    		traducaoTitulo: "Coloque os cavalos antes dos carros",
    		descricao: "Nao se precipitar",
    		exemplo: "Put the horses before the cars",
    		exemploTraducao: "Coloque os cavalos antes dos carros",
    		dificuldade: "3"
    	},

      {
    		id_ditado: "1",
    		titulo: "Put the horses before the cars",
    		traducaoTitulo: "Coloque os cavalos antes dos carros",
    		descricao: "Nao se precipitar",
    		exemplo: "Put the horses before the cars",
    		exemploTraducao: "Coloque os cavalos antes dos carros",
    		dificuldade: "3"
    	}

    ]



  }

  goDitado(): void {
this.navCtrl.push("DitadoPopularPage");
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad DitadoPopularPage');
  }

}
