import React from 'react';
// import ProductCard from '../ProductCard/ProductCard';

const GridView = ({products}) => {
  return (
    <div>
      {/* {products.map(product => (
        <div key={product.id}>
          <h2>
            {product.title} {product.price}
          </h2>
        </div>
      ))} */}

      {/* {products.map(product => {
        return <ProductCard key={product.id} {...product} />;
      })} */}
    </div>
  );
};
export default GridView;
