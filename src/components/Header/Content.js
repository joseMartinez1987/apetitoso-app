import React from 'react';
import ProductList from './ProductList';
import DisplayRecipe from './DisplayRecipe';




const Content = () => {

 var cakeList = [
     'oreo',
     'nutella',
     'manjar',
     'mango'
 ]

    return (
        <div className = 'content's>
            <ProductList cakeList= {cakeList}/>
            <DisplayRecipe/>
           
        </div>
    );
};
export default Content;