import React from 'react';

export default class Header extends React.Component {

  render() {
    return (
      <div>
        <h1 className="header" style={{
          fontWeight: '700',
          textAlign: 'center',
          padding: '10px',
          marginTop: '10px'
        }}
        >Become ONE OF US With These Great Products</h1>
        <img src="/WickedBuyer.png" alt="oneofus" style={{ float: 'right', display: 'inline-block', width: '30%', height: 'auto' }}/>
      </div>
    );
  }
}
