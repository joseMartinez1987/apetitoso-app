import React from 'react';


const DisplayRecipe =() => {
    return (
        <div className='flex-item'>
            <h1>Torta de Chocolate</h1>
            <table className='display-recipe'>
                <tr>
                    <td>Ingrediente</td>
                    <td>Cantidad</td>
                    <td>Precio</td>
                </tr>
                <tr>
                    <td>harina</td>
                    <td>200gr</td>
                    <td>500 pesos</td>
                </tr>
            </table>

        </div>
    );
};

export default DisplayRecipe;