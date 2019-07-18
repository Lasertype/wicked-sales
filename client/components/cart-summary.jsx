import React from 'react';
import CartSummaryItem from './cart-summary-item';

export default class CartSummary extends React.Component {
  constructor(props) {
    super(props);

    this.backToCatalog = this.backToCatalog.bind(this);
    this.calculateOrderTotal = this.calculateOrderTotal.bind(this);
    this.goToCheckout = this.goToCheckout.bind(this);
  }

  backToCatalog() {
    this.props.viewState('catalog', {});
  }

  goToCheckout() {
    if (this.props.itemsInCart.length > 0) {
      this.props.viewState('checkout', {});
    } else {
      alert('Your cart is empty!');
    }
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
    if (this.props.itemsInCart.length > 0) {
      return (
        <div className="col-lg-8" style={{ marginLeft: '2rem' }}>
          <h4 className="text-muted" onClick={this.backToCatalog} style={{ cursor: 'pointer', marginTop: '20px', marginBottom: '20px' }}>&lt; Back to Catalog</h4>
          <h2 style={{ float: 'left' }}>My Cart</h2>
          <table className="table table-striped">
            <tbody>
              {
                this.props.itemsInCart.map((item, index) => {
                  return (
                    <CartSummaryItem key={index} itemInfo={item} />
                  );
                })
              }
            </tbody>
          </table>
          <div>
            <h3 style={{ display: 'inline-block' }}>Item Total ${this.calculateOrderTotal()}</h3>
            <button className="btn btn-primary btn-lg" onClick={this.goToCheckout} style={{ float: 'right', marginTop: '20px' }}>Checkout</button>
          </div>
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
