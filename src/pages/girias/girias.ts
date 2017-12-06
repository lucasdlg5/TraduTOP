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
  		descricao: "Todas as conversas",
  		exemplo: " sem ação.",
  		exemploTraducao: "Todas as Dont listen to him. Hes all mouth and no trousers",
  		dificuldade: " sem ação."
  	},
  	{
  		id_giria: "2",
  		titulo: "Tosser",
  		traducaoTitulo: "Sem tradução",
  		descricao: "Idiota",
  		exemplo: "####",
  		exemploTraducao: "#####",
  		dificuldade: "1"
  	},
  	{
  		id_giria: "3",
  		titulo: "cock-up",
  		traducaoTitulo: "Sem tradução",
  		descricao: "arruinar",
  		exemplo: " estragar algo",
  		exemploTraducao: "we've made a total cock-up of it",
  		dificuldade: "nós fizemos uma confusão total"
  	},
  	{
  		id_giria: "4",
  		titulo: "Bloody",
  		traducaoTitulo: "sangrento",
  		descricao: "Para algo que não deu certo",
  		exemplo: "Bloody!",
  		exemploTraducao: "Que Droga!",
  		dificuldade: " Que saco!"
  	},
  	{
  		id_giria: "5",
  		titulo: "Give You A Bell",
  		traducaoTitulo: "Dê-lhe um sino",
  		descricao: "ligar para voce",
  		exemplo: "####",
  		exemploTraducao: "####",
  		dificuldade: "2"
  	},
  	{
  		id_giria: "6",
  		titulo: "Blimey!",
  		traducaoTitulo: "Caramba!",
  		descricao: "Usado para expressar surpresa",
  		exemplo: "Blimey! did you see that mole rat lookin brit's teeth?",
  		exemploTraducao: "Caramba! Você viu esse rato procurando os dentes do britânico?",
  		dificuldade: "1"
  	},
  	{
  	  id_giria: "7",
  		titulo: "Wanker",
  		traducaoTitulo: "Sem tradução",
  		descricao: "Idiota",
  		exemplo: "#####",
  		exemploTraducao: "####",
  		dificuldade: "1"
  	},
  	{
  		id_giria: "8",
  		titulo: "Gutted",
  		traducaoTitulo: "Esvaziado",
  		descricao: "Devastado(a)",
  		exemplo: "After getting a few fish each",
  		exemploTraducao: " they swam in the pond before they went back to the beach to clean and gut the fish and prepare them for dinner.",
  		dificuldade: "Depois de pegar alguns peixes"
  	},
  	{
  		id_giria: "9",
  		titulo: "Bespoke ",
  		traducaoTitulo: "Sem tradução",
  		descricao: "Feito sob medida",
  		exemplo: "a bespoke suit",
  		exemploTraducao: "um terno feito sob medida",
  		dificuldade: "2"
  	},
  	{
  		id_giria: "10",
  		titulo: "Chuffed",
  		traducaoTitulo: "Sem tradução",
  		descricao: "orgulhoso(a)",
  		exemplo: "I'm dead chuffed to have wo",
  		exemploTraducao: "Estou morta e feliz por ter ganhado",
  		dificuldade: "1"
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
