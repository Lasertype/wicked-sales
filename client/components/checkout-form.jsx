import React from 'react';

export default class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };

    this.backToCatalog = this.backToCatalog.bind(this);
    this.convertcalculateOrderTotalToDollars = this.calculateOrderTotal.bind(this);
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

    return (
      <div>
        <div className="col-lg-6" style={{ marginLeft: '2rem' }}>
          <h2>Checkout</h2>
          <h4 className="text-muted">Order Total ${this.calculateOrderTotal()}</h4>
          <form action="">
            <label style={{ marginTop: '20px' }} htmlFor="Name">Name</label>
            <input className="form-control" type="text" id="Name" name="name"/>
            <label style={{ marginTop: '20px' }} htmlFor="Credit Card">Credit Card</label>
            <input className="form-control"type="text" id="Credit Card" name="creditCard"/>
            <label style={{ marginTop: '20px' }} htmlFor="Address">Address</label>
            <textarea className="form-control" cols="30" rows="10" id="Address" name="address"></textarea>
          </form>
          <div>
            <h4 onClick={this.backToCatalog} style={{ cursor: 'pointer', marginTop: '20px', marginBottom: '20px', display: 'inline-block' }}>{angle} Continue Shopping</h4>
            <button className="btn btn-primary btn-lg" style={{ float: 'right', marginTop: '20px' }}>Place Order</button>
          </div>
        </div>
      </div>
    );
  }
}
