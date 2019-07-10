import React from 'react';

export default class ProductListItem extends React.Component {

  render() {
    return (
      <div className="productCardContainer">

        <div className="productImageContainer">
          <img className="productImage" src="https://miro.medium.com/max/942/1*m3_D1btUPaMHsUoCFKGgjg.jpeg" alt=""/>
        </div>

        <div className="productInformationContainer">
          <div className="productName">The Clapper</div>
          <div className="productPrice">$9.99</div>
          <div className="productDescription">Get clapped with this awesome product.</div>
        </div>

      </div>
    );
  }
}
