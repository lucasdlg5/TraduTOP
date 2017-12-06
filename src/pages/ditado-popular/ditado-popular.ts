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
    		titulo: "A blessing in disguise",
    		traducaoTitulo: "Uma benção em disfarce",
    		descricao: "Há males que vem para o bem",
    		exemplo: "###",
    		exemploTraducao: "###",
    		dificuldade: "3"
    	},
    	{
    		id_ditado: "2",
    		titulo: "A chain is only as strong as its weakest link",
    		traducaoTitulo: "Uma cadeia é tão forte quanto o link mais fraco",
    		descricao: "A corda sempre arrebenta no lado mais fraco",
    		exemplo: "###",
    		exemploTraducao: "####",
    		dificuldade: "2"
    	},
    	{
    		id_ditado: "3",
    		titulo: "A close mouth catches no flies.",
    		traducaoTitulo: "Uma boca próxima não pega moscas.",
    		descricao: "Boca fechada não entra mosca ",
    		exemplo: "###",
    		exemploTraducao: "###",
    		dificuldade: "2"
    	},
    	{
    		id_ditado: "4",
    		titulo: "A man is known by the company he keeps",
    		traducaoTitulo: "Um homem é conhecido pela empresa que ele mantém",
    		descricao: "Diga com quem andas e te direi quem és",
    		exemplo: "###",
    		exemploTraducao: "###",
    		dificuldade: "2"
    	},
    	{
    		id_ditado: "5",
    		titulo: "A word to the wise is enough.",
    		traducaoTitulo: "Uma palavra para o sábio é suficiente.",
    		descricao: "Para bom entendedor meia palavra basta",
    		exemplo: "###",
    		exemploTraducao: "####",
    		dificuldade: "2"
    	},
    	{
    		id_ditado: "6",
    		titulo: "All good things must come to an end.",
    		traducaoTitulo: "Todas as coisas boas devem chegar ao fim.",
    		descricao: "Tudo o que é bom dura pouco",
    		exemplo: "###",
    		exemploTraducao: "####",
    		dificuldade: "1"
    	},
    	{
    		id_ditado: "7",
    		titulo: "Barking dogs seldom bite.",
    		traducaoTitulo: "Cão que ladra não morde.",
    		descricao: "Cachorro que late não morde ",
    		exemplo: "###",
    		exemploTraducao: "####",
    		dificuldade: "2"
    	},
    	{
    		id_ditado: "8",
    		titulo: "Better alone than in bad company.",
    		traducaoTitulo: "Melhor sozinho do que mal acompanhado.",
    		descricao: "Antes só do que mal acompanhado",
    		exemplo: "###",
    		exemploTraducao: "###",
    		dificuldade: "2"
    	},
    	{
    		id_ditado: "9",
    		titulo: "Better late than never.",
    		traducaoTitulo: "Antes tarde do que nunca.",
    		descricao: "Antes tarde do que nunca",
    		exemplo: "###",
    		exemploTraducao: "####",
    		dificuldade: "1"
    	}
    ];



  }

  goDitado(): void {
this.navCtrl.push("DitadoPopularPage");
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad DitadoPopularPage');
  }

}
