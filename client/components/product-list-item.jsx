import React from 'react';

export default class ProductListItem extends React.Component {

  convertToDollars(num) {
    let convertedNum = null;

    convertedNum = (num / 100).toFixed(2);
    return `$${convertedNum}`;
  }

  render() {
    const productPrice = this.props.products.price;
    const convertedProductPrice = this.convertToDollars(productPrice);

    return (
      <div className="card">
        <img className="card-img-top img-responsive" src={this.props.products.image} alt="Card image cap"/>
        <div className="card-body">
          <h3 className="card-title">{this.props.products.name}</h3>
          <p className="card-text text-muted">{convertedProductPrice}</p>
          <h5 className="card-text">{this.props.products.shortDescription}</h5>
        </div>
      </div>
    );
  }
}
