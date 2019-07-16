import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      view: {
        name: 'catalog',
        params: {}
      },
      cart: []
    };

    this.setView = this.setView.bind(this);
  }

  getProducts() {
    fetch('/api/products.php')
      .then(response => response.json())
      .then(products => this.setState({ products }));
  }

  getCartItems() {
    fetch('/api/cart.php')
      .then(response => response.json())
      .then(cart => this.setState({ cart }));
  }

  componentDidMount() {
    this.getProducts();
    this.getCartItems();
  }

  setView(name, params) {
    this.setState({
      view: {
        name,
        params
      }
    });
  }

  render() {
    if (this.state.view['name'] === 'catalog') {
      return (
        <div>
          <Header />
          <ProductList viewState={this.setView} products={this.state.products} />
        </div>
      );
    } else {
      return (
        <div>
          <Header />
          <ProductDetails viewState={this.setView} viewParams={this.state.view['params']}/>
        </div>
      );
    }
  }
}
