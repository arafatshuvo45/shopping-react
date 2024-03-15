import React from 'react';

const SingleProduct = ({product, handleCard}) => {
    
    
    return (
        <div>
            <div className="card">
            <img className='card-img' src={product.image} alt="" />
            <h1>{product.title.slice(0,10)}</h1>
            <p>{product.description.slice(0,80)}</p>
            <div className="card-footer">
              <h1>{product.price} $</h1>
              <button onClick={(e)=>handleCard(product)} className='add-btn'>Add to Cart</button>
            </div>
           </div>
        </div>
    );
};

export default SingleProduct;