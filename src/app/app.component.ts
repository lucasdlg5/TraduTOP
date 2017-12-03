import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import firebase from 'firebase';
//import { firebaseConfig } from './credentials';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen
  ) {

    //INICIO METODO TESTE DE CONEXÃO COM O FIREBASE
    var teste = {
    apiKey: "AIzaSyBSl9mu7w3rFu3VekSZKUkeiXvDv5xB0dU",
    authDomain: "tradutop-kls.firebaseapp.com",
    databaseURL: "https://tradutop-kls.firebaseio.com",
    projectId: "tradutop-kls",
    storageBucket: "tradutop-kls.appspot.com",
    messagingSenderId: "685943658523"

  }
    firebase.initializeApp(teste);
    //TERMINO METODO TESTE DE CONEXÃO COM O FIREBASE

    //firebase.initializeApp(firebaseConfig);

    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if (!user) {
        this.rootPage = 'LoginPage';
        unsubscribe();
      } else {
        this.rootPage = HomePage;
        unsubscribe();
      }
    });
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
