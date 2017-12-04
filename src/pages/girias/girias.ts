import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the GiriasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
//vc executou ai? aff vei, q chato isso, reinicia o server ai HAUHUAHAUHAUHAUAHU. memo erro?//o que? vc colocou o terminal? apareceu n kkkk


@IonicPage()
@Component({
  selector: 'page-girias',
  templateUrl: 'girias.html',
})
export class GiriasPage {
  giriasItems: any[];






  constructor(public navCtrl: NavController, public navParams: NavParams) {


  /*  let girias = [
      {
    	//"giria": {
    		"id_giria": "1",
    		"titulo": "All mouth and no trousers",
    		"traducaoTitulo": "Toda a boca e sem calças.",
    		"descricao": "Todas as conversas, sem ação.",
    		"exemplo": "Todas as Dont listen to him. Hes all mouth and no trousers, sem ação.",
    		"exemploTraducao": "Não o escute. Ele é toda boca e sem calças.",
    		"dificuldade": "2"
    	//}
    }
  ];*/

  this.giriasItems = [
      {
    	giria: {
    		id_giria: "1",
    		titulo: "All mouth and no trousers",
    		traducaoTitulo: "Toda a boca e sem calças.",
    		descricao: "Todas as conversas, sem ação.",
    		exemplo: "Todas as Dont listen to him. Hes all mouth and no trousers, sem ação.",
    		exemploTraducao: "Não o escute. Ele é toda boca e sem calças.",
    		dificuldade: "2"
    	}
    }
  ];

  }

  goGirias(): void {
this.navCtrl.push("GiriasPage");
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad GiriasPage');
  }



}
