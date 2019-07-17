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
      <div className="card" style={{ display: 'table-cell' }}>
        <img className="card-img-top img-responsive"
          src={this.props.itemInfo.image}
          alt="Card image cap"
          style={{ height: '150px', objectFit: 'contain' }}/>

        <div className="card-body">
          <h3 className="card-title">{this.props.itemInfo.name}</h3>
          <p className="card-text text-muted">{convertedProductPrice}</p>
          <h5 className="card-text">{this.props.itemInfo.shortDescription}</h5>
          <div style={{ position: 'absolute', top: '90%', left: '50%', transform: 'translate(-50%, -50%)' }}>
            {/* <button type="button" onClick={this.updateViewState} className="btn btn-primary">Buy</button> */}
          </div>
        </div>
      </div>
    );
  }
}
