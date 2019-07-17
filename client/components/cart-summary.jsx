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
        <div className="col-lg-8">
          <p className="text-muted" onClick={this.backToCatalog} style={{ cursor: 'pointer', marginTop: '20px', marginBottom: '20px' }}>{angle} Back to Catalog</p>
          <h2 style={{ float: 'left' }}>My Cart</h2>
          <table className="table table-striped">
            <tbody>

            </tbody>
          </table>

          {
            this.props.itemsInCart.map(item => {
              return (
                <CartSummaryItem key={item.id} itemInfo={item} />
              );
            })
          }
          <h3>Item Total ${this.calculateOrderTotal()}</h3>
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
