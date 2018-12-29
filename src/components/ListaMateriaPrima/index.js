import React, {Component} from 'react';
import Modal from 'react-responsive-modal';
import FirebaseDB from './../FireBaseDB';
import './style.css';



class ListaMateriaPrima extends Component {

    constructor(props){
        super (props);
        this.state ={ 
            open:false,
        }

        this.ingredient={};


        
    };
      getIngredientName(e){
    this.ingredient.name = e.target.value;
  }

  getIngredientPrice(e){
    this.ingredient.price = e.target.value;
  }


  getIngredientMeasurement(e){
    this.ingredient.measurement = e.target.value;
  }

  createIngredient(){
    this.firebase.ingredientModel.push().set(this.ingredient);
  }


    onOpenModal = () => {
        this.setState({ open: true });
      };
    
      onCloseModal = () => {
        this.setState({ open: false });
      };
    



    render(){
        const {open} = this.state;
        return (
            <div>
                <button onClick={this.onOpenModal} className='lista-materia-prima'>Lista de materia prima</button>
                    <Modal open={open} onClose={this.onCloseModal} center>
                    <p className ='p-materia-prima'>Lista de precio de materia prima</p>
                        <label value ='Azucar' for='Azucar'>Azucar</label>
                        <input type='number' id='Azucar'></input> <br/><br/><br/>


                         <input type="text" placeholder="ingredient name" onChange={(e) => this.getIngredientName(e)} ></input>
                        <input type="text"  placeholder="ingredient price"  onChange={(e) => this.getIngredientPrice(e)} ></input>
                        <form>
                        <select name='Unidad de medida'>
                            <option value='mililitros'>Mililitros</option>
                            <option value='gramos'>Gramos</option>
                            <option value='unidad'>Unidad</option>
                        </select>
                        </form>

                        <input type="text"  placeholder="ingredient measurement"  onChange={(e) => this.getIngredientMeasurement(e)} ></input>
                        <button type="button" onClick={() => this.createIngredient()} >Crear Ingrediente</button>

                    </Modal>
            </div>
        );
    }
};

export default ListaMateriaPrima;