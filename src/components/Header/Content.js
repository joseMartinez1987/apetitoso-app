import React from 'react';
import ProductList from './ProductList';
import DisplayRecipe from './DisplayRecipe';

 
const Content = () => {
    return (
        <div className = 'content'>
            <ProductList/>
            <DisplayRecipe/>
        </div>
    );
};
export default Content;