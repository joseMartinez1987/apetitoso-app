  import firebase from 'firebase'
  import {DB_CONFIG} from './../../../src/config/config';

  export default class FireBaseDB{


    constructor(){

      this.app = firebase.initializeApp(DB_CONFIG);
      this.recipeModel = this.app.database().ref().child('recipe');

    }

    

  }