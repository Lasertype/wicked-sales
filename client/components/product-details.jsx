import React from 'react';

export default class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null
    };
  }

  componentDidMount() {
    fetch('/api/products.php?id=1')
      .then(response => response.json())
      .then(product => this.setState({ product }));
  }

  render() {
    return null;
  }
}
