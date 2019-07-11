import React from 'react';
import ProductListItem from './product-list-item';

export default class ProductList extends React.Component {

  render() {
    return (
      <div className="container">
        <div className="row">
          {
            this.props.products.map(product => {
              return (
                <div className="col-sm-4" style={{ display: 'inline-block', border: '1px solid' }} key={product.id}>
                  <ProductListItem products={product}/>
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }
}
