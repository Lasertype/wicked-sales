import React from 'react';
import CartSummaryItem from './cart-summary-item';

export default class CartSummary extends React.Component {
  constructor(props) {
    super(props);

    this.backToCatalog = this.backToCatalog.bind(this);
    this.calculateOrderTotal = this.calculateOrderTotal.bind(this);
  }

  backToCatalog() {
    this.props.viewState('catalog', {});
  }

  calculateOrderTotal() {
    let total = null;
    let convertedNum = null;

    this.props.itemsInCart.forEach(item => {
      total += item.price;
    });

    convertedNum = (total / 100).toFixed(2);
    return convertedNum;
  }

  render() {
    const angle = '<';

    if (this.props.itemsInCart.length > 0) {
      return (
        <div>
          <p className="text-muted" onClick={this.backToCatalog} style={{ cursor: 'pointer', marginTop: '20px', marginBottom: '20px' }}>{angle} Back to Catalog</p>
          <h2>My Cart</h2>
          {
            this.props.itemsInCart.map(item => {
              return (
                <CartSummaryItem key={item.id} itemInfo={item} />
              );
            })
          }
          <p>Item Total {this.calculateOrderTotal()}</p>
        </div>
      );
    } else {
      return (
        <div>
                Your cart is empty!!
        </div>
      );
    }
  }
}
