import React from 'react';

export default class Header extends React.Component {

  render() {
    return (
      <div>
        <h1 className="header"
          style={{
            fontWeight: '700',
            padding: '10px',
            marginTop: '10px'
          }}
        >Wicked Sales</h1>
      </div>
    );
  }
}
