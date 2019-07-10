import React from 'react';
import ProductListItem from './product-list-item';

export default class ProductList extends React.Component {
//   constructor(props) {
//     super(props);
//   }

  render() {
    // console.log('product-list: ', this.props.products);
    return (
      <div className="productListContainer">
        <div>
          {
            this.props.products.map(product => {
              return (
                <ProductListItem key={product.id} products={product}/>
              );
            })
          }
        </div>
      </div>
    );
  }
}
