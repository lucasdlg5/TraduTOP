import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PhrasalVerbsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-phrasal-verbs',
  templateUrl: 'phrasal-verbs.html',
})
export class PhrasalVerbsPage {
  phrasalItems: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.phrasalItems =
    [
       {
  		id_phrasal: "1",
  		titulo: "Give up",
  		traducaoTitulo: "Desistir.",
  		descricao: "Desistir",
  		exemplo: "I want to Give Up.",
  		exemploTraducao: "Eu quero desistir.",
  		dificuldade: "2"
  	},
    {
   id_phrasal: "1",
   titulo: "Give up",
   traducaoTitulo: "Desistir.",
   descricao: "Desistir",
   exemplo: "I want to Give Up.",
   exemploTraducao: "Eu quero desistir.",
   dificuldade: "2"
 }


    ]

  }

  goPhrasal(): void {
this.navCtrl.push("PhrasalVerbsPage");
}


  ionViewDidLoad() {
    console.log('ionViewDidLoad PhrasalVerbsPage');
  }

}
