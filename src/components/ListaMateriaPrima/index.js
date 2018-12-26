import React, {Component} from 'react';
import Modal from 'react-responsive-modal';
import './style.css';



class ListaMateriaPrima extends Component {

    constructor(props){
        super (props);
        this.state ={ 
            open:false,
        }


        
    };

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
                        <input type='number' id='Azucar'></input>

                    </Modal>
            </div>
        );
    }
};

export default ListaMateriaPrima;