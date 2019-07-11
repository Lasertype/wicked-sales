import React from 'react';

export default class ProductListItem extends React.Component {

  render() {
    return (
      <div className="card">
        <img className="card-img-top img-responsive" src={this.props.products.image} alt="Card image cap"/>
        <div className="card-body">
          <h3 className="card-title">{this.props.products.name}</h3>
          <p className="card-text"><small className="text-muted">{this.props.products.price}</small></p>
          <p className="card-text">{this.props.products.shortDescription}</p>
        </div>
      </div>
    );
  }
}
