import React from 'react';

export default class ProductListItem extends React.Component {
  constructor(props) {
    super(props);

    this.updateViewState = this.updateViewState.bind(this);
  }
  convertToDollars(num) {
    let convertedNum = null;

    convertedNum = (num / 100).toFixed(2);
    return `$${convertedNum}`;
  }

  updateViewState() {
    this.props.viewState('details', { id: this.props.products.id });
  }

  render() {
    const productPrice = this.props.products.price;
    const convertedProductPrice = this.convertToDollars(productPrice);

    return (
      <div className="card" style={{ display: 'table-cell' }}>
        <img className="card-img-top img-responsive"
          src={this.props.products.image}
          alt="Card image cap"
          style={{ height: '150px', objectFit: 'contain' }}/>
        <div className="card-body">
          <h3 className="card-title">{this.props.products.name}</h3>
          <p className="card-text text-muted">{convertedProductPrice}</p>
          <h5 className="card-text">{this.props.products.shortDescription}</h5>
          <div style={{ position: 'absolute', top: '90%', left: '50%', transform: 'translate(-50%, -50%)' }}>
            <button type="button" onClick={this.updateViewState} className="btn btn-primary">Buy</button>
          </div>
        </div>
      </div>
    );
  }
}
