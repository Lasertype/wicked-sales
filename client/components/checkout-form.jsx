import React from 'react';

export default class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };

    this.backToCatalog = this.backToCatalog.bind(this);
  }

  backToCatalog() {
    this.props.viewState('catalog', {});
  }

  render() {
    const angle = '<';

    return (
      <div>
        <div className=" col-lg-8">
          <h2>Checkout</h2>
          <form action="">
            <label style={{ marginTop: '20px' }} htmlFor="Name">Name</label>
            <input className="form-control" type="text" id="Name" name="name"/>
            <label style={{ marginTop: '20px' }} htmlFor="Credit Card">Credit Card</label>
            <input className="form-control"type="text" id="Credit Card" name="creditCard"/>
            <label style={{ marginTop: '20px' }} htmlFor="Address">Address</label>
            <textarea className="form-control" cols="30" rows="10" id="Address" name="address"></textarea>
          </form>
          <h4 className="" onClick={this.backToCatalog} style={{ cursor: 'pointer', marginTop: '20px', marginBottom: '20px' }}>{angle} Continue Shopping</h4>
        </div>
      </div>
    );
  }
}
