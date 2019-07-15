import React from 'react';
import ProductListItem from './product-list-item';

export default class ProductList extends React.Component {

  render() {
    return (
      <div className="container col-lg-10" style={{ paddingLeft: '37px' }}>
        <div className="row">
          {
            this.props.products.map(product => {
              return (
                <div className="col-sm-4"
                  style={{ border: '.5px solid', height: '325px', position: 'relative' }}
                  key={product.id}
                  onClick={this.updateViewState}>
                  <ProductListItem viewState={this.props.viewState} products={product}/>
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }
}
