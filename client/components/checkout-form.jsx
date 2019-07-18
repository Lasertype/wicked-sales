import React from 'react';

export default class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      creditCard: '',
      address: ''
    };

    this.backToCatalog = this.backToCatalog.bind(this);
    this.convertcalculateOrderTotalToDollars = this.calculateOrderTotal.bind(this);
    this.placeOrder = this.placeOrder.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleCreditChange = this.handleCreditChange.bind(this);
    this.handleAddressChange = this.handleAddressChange.bind(this);
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

  placeOrder() {
    this.props.orderPlacement(this.state);
  }

  handleNameChange(e) {
    this.setState({ name: e.target.value });
  }

  handleCreditChange(e) {
    this.setState({ creditCard: e.target.value });
  }

  handleAddressChange(e) {
    this.setState({ address: e.target.value });
  }

  render() {
    return (
      <div>
        <div className="col-lg-6" style={{ marginLeft: '2rem' }}>
          <h2>Checkout</h2>
          <h4 className="text-muted" style={{ marginTop: '20px' }}>Order Total ${this.calculateOrderTotal()}</h4>
          <form action="">
            <label style={{ marginTop: '20px' }} htmlFor="Name">Name</label>
            <input className="form-control" type="text" id="Name" name="name" onChange={this.handleNameChange}/>
            <label style={{ marginTop: '20px' }} htmlFor="Credit Card">Credit Card</label>
            <input className="form-control"type="text" id="Credit Card" name="creditCard" onChange={this.handleCreditChange}/>
            <label style={{ marginTop: '20px' }} htmlFor="Address">Shipping Address</label>
            <textarea className="form-control" cols="30" rows="10" id="Address" name="address" onChange={this.handleAddressChange}></textarea>
          </form>
          <div>
            <h4 onClick={this.backToCatalog} style={{ cursor: 'pointer', marginTop: '20px', marginBottom: '20px', display: 'inline-block' }}>&lt; Continue Shopping</h4>
            <button onClick={this.placeOrder} className="btn btn-primary btn-lg" style={{ float: 'right', marginTop: '20px' }}>Place Order</button>
          </div>
        </div>
      </div>
    );
  }
}
