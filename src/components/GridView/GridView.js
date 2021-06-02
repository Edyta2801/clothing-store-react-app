import React, {useState, useEffect} from 'react';

import ProductCard from '../ProductCard/ProductCard';
import {Wrap, WrapItem} from '@chakra-ui/react';
import api from '../../api';

const GridView = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get('/products').then(response => setProducts(response.data));
  }, []);

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

      <Wrap

        // spacing="1vw"
        justify="space-evenly"
        my="10"
        // mt={{base: '0', md: '20'}}
        // mb={{base: '10', md: '0'}}
      >
        {products.map(product => (
          <div>
            <WrapItem my='5' mx='2'>
              <ProductCard  key={product.id} {...product}></ProductCard>
            </WrapItem>
          </div>
        ))}
      </Wrap>
    </div>
  );
};
export default GridView;
