import React from 'react';
import ProductListItem from './product-list-item';

export default class ProductList extends React.Component {

  render() {
    return (
      <div className="container col-lg-8" >
        <div className="row">
          {
            this.props.products.map(product => {
              return (
                <div className="col-sm-6"
                  style={{ border: '.5px solid', height: '325px', position: 'relative' }}
                  key={product.id}>
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
