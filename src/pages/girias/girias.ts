import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { UserExtractPipe } from '../utils/custom-pipe';
//import {GiriasBancoProvider} from '../../providers/girias-banco';
//import firebase from 'firebase';
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
/*
  searchQuery: string = '';
    items: string[];
*/



  constructor(public navCtrl: NavController, public navParams: NavParams) {

/*
    this.user = {
                name: 'John Connor',
                birthyear: 1985
            }
*/
/*
    this.girias = girias;
        this.girias.getGirias();
*/

/*
    public countryList:Array<any>;
    public loadedCountryList: Array<any>;
    public contryRef:firebase.database.Reference;

this.countryRef = firebase.database().ref('/countries');

initializeItems(): void {
  this.countryList = this.loadedCountryList;
}

this.countryRef.on('value', countryList => {
  let countries = [];
  countryList.forEach( country => {
    countries.push(country.val());
    return false;
  });

  this.countryList = countries;
  this.loadedCountryList = countries;
});

getItems(searchbar) {
  // Reset items back to all of the items
  this.initializeItems();

  // set q to the value of the searchbar
  var q = searchbar.srcElement.value;


  // if the value is an empty string don't filter the items
  if (!q) {
    return;
  }

  this.countryList = this.countryList.filter((v) => {
    if(v.name && q) {
      if (v.name.toLowerCase().indexOf(q.toLowerCase()) > -1) {
        return true;
      }
      return false;
    }
  });

  console.log(q, this.countryList.length);

}

*/
/*
      this.initializeItems();

      getItems(ev: any) {
      initializeItems() {
      this.items = [
        'Amsterdam',
        'Bogota'

      ];
    }

    let val = ev.target.value;

    if (val && val.trim() != '') {
  this.items = this.items.filter((item) => {
    return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
  })
}
}

*/

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

    		id_giria: "1",
    		titulo: "All mouth and no trousers",
    		traducaoTitulo: "Toda a boca e sem calças.",
    		descricao: "Todas as conversas, sem ação.",
    		exemplo: "Todas as Dont listen to him. Hes all mouth and no trousers, sem ação.",
    		exemploTraducao: "Não o escute. Ele é toda boca e sem calças.",
    		dificuldade: "2"

    },
    {

      id_giria: "1",
      titulo: "All mouth and no trousers",
      traducaoTitulo: "Toda a boca e sem calças.",
      descricao: "Todas as conversas, sem ação.",
      exemplo: "Todas as Dont listen to him. Hes all mouth and no trousers, sem ação.",
      exemploTraducao: "Não o escute. Ele é toda boca e sem calças.",
      dificuldade: "2"

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
