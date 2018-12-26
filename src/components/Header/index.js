import React, {Component} from 'react';
import './style.css';
import Content from './Content';
import CrearReceta from '../CrearReceta';
import ListaMateriaPrima from './../../components/ListaMateriaPrima';




class Header extends Component {

    render(){

         return(
            <div className='header-content'>  
                <h1 className='name'>Apetitoso.com.cl</h1>
                <h2 className='control-product'>Control de producto y precio </h2>
               <CrearReceta/>
               <ListaMateriaPrima />
                <Content/>

             </div>
         );
    }
};
export default Header;
