import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FireBaseDB from './FireBaseDB'

class App extends Component {

  constructor(){
    
    super();
    this.firebase = new FireBaseDB();
    this.firebase.recipeModel.on('value', (d) => {

      console.log(d.val());
    })

    this.firebase.recipeModel.on('child_added', (d) => {

      console.log(d.key);
    })
  }

  getRecipentName(e){
    
    this.recipentName = e.target.value;
    
  }

  addRecipent(){


    var recipe = {
      name: this.recipentName
    }

    this.firebase.recipeModel.push().set(recipe);
  }

  render() {
    this.recipentName = "";
    return (
      <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
          <p>
            Help me I want to learn react 
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        <input type="text" onChange={(e) => this.getRecipentName(e)}></input>
        <button type="button" onClick={() => this.addRecipent()}>Crear Receta</button>

        </header>
      </div>
    );
  }
}

export default App;
