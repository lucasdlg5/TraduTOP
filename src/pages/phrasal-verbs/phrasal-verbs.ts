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
    		descricao: "Desistir.",
    		exemplo: "I want to Give Up.",
    		exemploTraducao: "Eu quero desistir.",
    		dificuldade: "2"
    	},
    	{
    		id_phrasal: "2",
    		titulo: "Act up",
    		traducaoTitulo: "Agir",
    		descricao: "Comportar-se mal",
    		exemplo: " não funcionar como deveria",
    		exemploTraducao: "The babysitter had a difficult time",
    		dificuldade: " the children acted up all evening."
    	},
    	{
    		id_phrasal: "3",
    		titulo: "Ask around",
    		traducaoTitulo: "Pergunte por aí",
    		descricao: "Convidar alguém para sair",
    		exemplo: "He asked her out last night.",
    		exemploTraducao: "Ele a chamou para sair ontem a noite",
    		dificuldade: "2"
    	},
    	{
    		id_phrasal: "4",
    		titulo: "Blow up",
    		traducaoTitulo: "Explodir",
    		descricao: "Explodir (bomba",
    		exemplo: " etc.); estourar (tempestade",
    		exemploTraducao: " escândalo",
    		dificuldade: " crise"
    	},
    	{
    		id_phrasal: "5",
    		titulo: "Break down",
    		traducaoTitulo: "demolir",
    		descricao: "Quebrar",
    		exemplo: " parar de funcionar",
    	  exemploTraducao: "Our car broke down on the road.",
    		dificuldade: "Nosso carro quebrou na estrada."
    	},
    	{
    		id_phrasal: "6",
    		titulo: "Break up",
    		traducaoTitulo: "Rompimento",
    		descricao: "Separar-se",
    		exemplo: " terminar um relacionamento",
    		exemploTraducao: " uma parceria",
    		dificuldade: " etc."
    	},
    	{
    		id_phrasal: "7",
    		titulo: "Cheer up",
    		traducaoTitulo: "Anime-se",
    		descricao: "Animar-se",
    		exemplo: "She cheered up when he got home.",
    		exemploTraducao: "Ela se animou quando chegou em casa.",
    		dificuldade: "3"
    	},
    	{
    		id_phrasal: "8",
    		titulo: "Chip in",
    		traducaoTitulo: "Sem Tradução",
    		descricao: "Contribuir com dinheiro",
    		exemplo: " ",
    		exemploTraducao: "If everyone chips in we'll be able to buy her a nice present.",
    		dificuldade: "Se todos mexerem"
    	},
    	{
    		id_phrasal: "9",
    		titulo: "Come apart",
    		traducaoTitulo: "Separar",
    		descricao: "Separar-se",
    		exemplo: " desfazer-se em pedaços",
    		exemploTraducao: " quebrar",
    		dificuldade: " desmoronar"
    	},
    	{
    		id_phrasal: "10",
    		titulo: "Come off",
    		traducaoTitulo: "Saia",
    		descricao: "Sair",
    		exemplo: " desaparecer",
    		exemploTraducao: "That mark on your dress won't come off.",
    		dificuldade: "Essa marca no seu vestido não vai sair."
    	}
    ];

  }

  goPhrasal(): void {
this.navCtrl.push("PhrasalVerbsPage");
}


  ionViewDidLoad() {
    console.log('ionViewDidLoad PhrasalVerbsPage');
  }

}
