import React from 'react';
import './style.css';
import Content from './Content';




const Header = () => {
    return(
        <div className='header-content'>  
            <h1 className='name'>Apetitoso.com.cl</h1>
            <h2 className='control-product'>Control de producto y precio </h2>
            <button className='crear-receta'>Crear Receta</button>
            <button className='lista-materia-prima'>Lista de materia prima</button>
            <Content/>

       </div>
    );
};





export default Header;
