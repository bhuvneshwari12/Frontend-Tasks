

import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  
  // Dummy product data
  const dummyProducts = [
    { id: 'e1', title: 'Test Product 1', price: 10, description: 'This is the first product' },
    { id: 'e2', title: 'Test Product 2', price: 20, description: 'This is the second product' },
    { id: 'e3', title: 'Test Product 3', price: 30, description: 'This is the third product' },
  ];

  
  

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {dummyProducts.map(product => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul> 
    </section>
  );
};

export default Products;
