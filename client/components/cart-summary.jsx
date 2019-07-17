import React from 'react';
import CartSummaryItem from './cart-summary-item';

export default class CartSummary extends React.Component {

  render() {
    if (this.props.itemsInCart.length > 0) {
      return (
        <div>
          {
            this.props.itemsInCart.map(item => {
              return (
                <CartSummaryItem key={item.id} itemInfo={item} />
              );
            })
          }
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
