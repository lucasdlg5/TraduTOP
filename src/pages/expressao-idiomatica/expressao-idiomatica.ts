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
  //gerador dos cards
  expressaoItems: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.expressaoItems = [
    	{
    		id_expressao: "1",
    		titulo: "The best of both worlds",
    		traducaoTitulo: "O melhor de dois mundos",
    		descricao: "o melhor de duas oportunidades diferentes ao mesmo tempo",
    		exemplo: "By working part-time and looking after her kids two days a week she managed to get the best of both worlds",
    		exemploTraducao: "Trabalhando meio período e cuidando dos filhos duas vezes por semana",
    		dificuldade: " ela conseguiu ter o melhor dos dois mundos."
    	},
    	{
    		id_expressao: "2",
    		titulo: "Speak of the devil",
    		traducaoTitulo: "Falando no diabo",
    		descricao: "é igual ao que dizemos em português",
    		exemplo: " “falar do diabo”. Significa que você está falando de alguém e esta pessoa aparece naquela hora.",
    		exemploTraducao: "Hi",
    		dificuldade: " Tom"
    	},
    	{
    		"id_expressao": "3",
    		"titulo": "‘See eye to eye",
    		"traducaoTitulo": "Ver olho no olho",
    		"descricao": "concordar com alguém.",
    		"exemplo": "They finally saw eye to eye on the business deal.",
    		"exemploTraducao": "Eles finalmente chegaram a um acordo para o negócio.",
    		"dificuldade": "2"
    	},
    	{
    		id_expressao: "4",
    		titulo: "Once in a blue moon",
    		traducaoTitulo: "Uma vez em uma lua azul",
    		descricao: "algo raríssimo",
    		exemplo: "I only go to the cinema once in a blue moon.",
    		exemploTraducao: "Vou ao cinema de vez em nunca.",
    		dificuldade: "1"
    	},
    	{
    		id_expressao: "5",
    		titulo: "When pigs fly",
    		traducaoTitulo: "Quando porcos voarem",
    		descricao: "algo que nunca vai acontecer.",
    		exemplo: "When pigs fly she’ll tidy up her room.",
    		exemploTraducao: "No dia de São Nunca",
    		dificuldade: " ela vai arrumar o quarto dela."
    	},
    	{
    		id_expressao: "6",
    		titulo: "To cost an arm and a leg",
    		traducaoTitulo: "Para custar um braço e uma perna",
    		descricao: "algo muito caro",
    		exemplo: " que custa os olhos da cara.",
    		exemploTraducao: "Fuel these days costs an arm and a leg",
    		dificuldade: "Combustível ultimamente custa os olhos da cara."
    	},
    	{
    	  id_expressao: "7",
    		titulo: "A piece of cake",
    		traducaoTitulo: "Um pedaço de bolo",
    		descricao: "algo muito fácil",
    		exemplo: "The English test was a piece of cake",
    		exemploTraducao: "A prova de inglês foi moleza.",
    		dificuldade: "1"
    	},
    	{
    		id_expressao: "8",
    		titulo: "Let the cat out of the bag",
    		traducaoTitulo: "Deixe o gato sair da bolsa",
    		descricao: "revelar um segredo acidentalmente",
    		exemplo: " deixar escapar.",
    		exemploTraducao: "I let the cat out of the bag about their wedding plans.",
    		dificuldade: "Deixei escapar os planos de casamento deles."
    	},
    	{
    		id_expressao: "9",
    		titulo: "To feel under the weather",
    		traducaoTitulo: "Sentir-se sob o clima",
    	  descricao: "sentir-se mal",
    		exemplo: "I’m really feeling under the weather today; I have a terrible cold.",
    		exemploTraducao: "Estou me sentindo mal hoje; estou com um resfriado fortíssimo.",
    		dificuldade: "3"
    	}
    ];



  }

  goExpressao(): void {
this.navCtrl.push("ExpressaoIdiomaticaPage");
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExpressaoIdiomaticaPage');
  }

}
