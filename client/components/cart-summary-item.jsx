import React from 'react';

export default class CartSummaryItem extends React.Component {

  convertToDollars(num) {
    let convertedNum = null;

    convertedNum = (num / 100).toFixed(2);
    return `$${convertedNum}`;
  }

  render() {
    const productPrice = this.props.itemInfo.price;
    const convertedProductPrice = this.convertToDollars(productPrice);

    return (
      <tr scope="row" className="rowData">
        <td>
          <img className="card-img-top img-responsive"
            src={this.props.itemInfo.image}
            alt="Card image cap"
            style={{ height: '150px', objectFit: 'contain' }}
          />
        </td>
        <td>
          <h3 className="card-title">{this.props.itemInfo.name}</h3>
        </td>
        <td>
          <p className="card-text text-muted">{convertedProductPrice}</p>
        </td>
        <td>
          <h5 className="card-text">{this.props.itemInfo.shortDescription}</h5>
        </td>
      </tr>
    );
  }
}
