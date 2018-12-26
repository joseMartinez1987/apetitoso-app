import React, {Component} from 'react';
import Modal from 'react-responsive-modal';
import FireBaseDB from './FireBaseDB'
import './style.css';


class CrearReceta extends Component {

  constructor(props){
    
    super(props);
       this.state = {
          open: false,
    };

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

  
  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

      render() {
        this.recipentName = "";
        const { open } = this.state;
        return (
          <div>
            <button onClick={this.onOpenModal}>Crear receta</button>
            <Modal open={open} onClose={this.onCloseModal} center>
            <form>
                <p className ='preparacion'> Preparacion</p>
                <label>Nombre de la receta</label>
                <input type="text" onChange={(e) => this.getRecipentName(e)} ></input>
                  <div className='producto-gramo'>
                    <select>
                      <option value='azucar'>Azucar</option>
                      <option value='harina'>Harina de trigo</option>
                      <option value ='chocolate'>Chocolate</option>
                    </select>
                    <input type='number' placeholder='ingrese cantidad en gramos'/>
                  </div>
                  <div className='producto-gramo'>
                    <select>
                      <option value='azucar'>Azucar</option>
                      <option value='harina'>Harina de trigo</option>
                      <option value ='chocolate'>Chocolate</option>
                    </select>
                    <input type='number' placeholder='ingrese cantidad en gramos'/>
                  </div>                  
                  <div className='producto-gramo'>
                    <select>
                      <option value='azucar'>Azucar</option>
                      <option value='harina'>Harina de trigo</option>
                      <option value ='chocolate'>Chocolate</option>
                    </select>
                    <input type='number' placeholder='ingrese cantidad en gramos'/>
                  </div>


                </form>
                 <button type="button" className='submit' onClick={() => this.addRecipent()} >Crear Receta</button>
            </Modal>
          </div>
        );
      }

}

export default CrearReceta;