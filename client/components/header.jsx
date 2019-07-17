import React from 'react';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.backToCatalog = this.backToCatalog.bind(this);
  }

  backToCatalog() {
    this.props.viewState('cart', {});
  }

  render() {
    return (
      <div className='col-lg-10 col-md-10 col-sm-10' style={{ display: 'flexbox' }}>
        <div style={{ display: 'inline-block' }}>
          <h1 className="header"
            style={{
              fontWeight: '700',
              paddingTop: '20px',
              paddingBottom: '20px',
              paddingLeft: '20px',
              paddingRight: '10px',
              marginTop: '10px',
              display: 'inline-block'
            }}
          >Wicked Sales</h1>
          <img src="/WickedBuyer.png" alt="oneofus"
            style={{
              display: 'inline-block',
              width: '28px',
              height: 'auto',
              verticalAlign: 'text-bottom'
            }}/>
          <img src="/WickedBuyer.png" alt="oneofus"
            style={{
              display: 'inline-block',
              width: '28px',
              height: 'auto',
              verticalAlign: 'text-bottom'
            }}/>
          <img src="/WickedBuyer.png" alt="oneofus"
            style={{
              display: 'inline-block',
              width: '28px',
              height: 'auto',
              verticalAlign: 'text-bottom'
            }}/>
        </div>
        <div style={{ display: 'inline-block', float: 'right' }}>
          <h3 style={{ cursor: 'pointer' }}>
            <i onClick={this.backToCatalog} className="fas fa-shopping-cart"></i>
            {this.props.cartItemCount} Items
          </h3>
        </div>
      </div>
    );
  }
}
