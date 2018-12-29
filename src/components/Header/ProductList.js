import React from 'react';



showListCake = (lists) => {

    lists.map(list=>{
        return  <li>{list}</li>
    });

};





const ProductList =({cakeList}) => {




    return (

        <div>
            <ul>
                {this.showListCake(cakeList)}
            </ul>
        </div>
    );
}
export default ProductList;


