import React from 'react';

export default class ProductListItem extends React.Component {
  constructor(props) {
    super(props);
    this.renderProductItem = this.renderProductItem.bind(this);
  }

  renderProductItem() {
    // console.log('product: ', this.props.products);

    return (
      <div className="productCardContainer">

        <div className="productImageContainer">
          <img className="productImage" src={this.props.products.image} alt=""/>
        </div>

        <div className="productInformationContainer">
          <div className="productName">{this.props.products.name}</div>
          <div className="productPrice">{this.props.products.price}</div>
          <div className="productDescription">{this.props.products.shortDescription}</div>
        </div>

      </div>
    );
  }

  render() {
    return (
      this.renderProductItem()
    );
  }
}
