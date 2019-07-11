import React from 'react';
import Header from './header';
// import ProductListItem from './product-list-item';
import ProductList from './product-list';
import ProductDetails from './product-details';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  getProducts() {
    fetch('/api/products.php')
      .then(response => response.json())
      .then(products => this.setState({ products }));
  }

  componentDidMount() {
    this.getProducts();
  }

  render() {
    return (
      <div>
        <Header />
        <ProductList products={this.state.products} />
        <ProductDetails products={this.state.products}/>
      </div>
    );
  }
}
