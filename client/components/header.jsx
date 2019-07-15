import React from 'react';

export default class Header extends React.Component {

  render() {
    return (
      <div>
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
    );
  }
}
