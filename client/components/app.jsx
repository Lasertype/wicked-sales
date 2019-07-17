import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';
import CartSummary from './cart-summary';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      view: {
        name: 'cart',
        params: {}
      },
      cart: []
    };

    this.setView = this.setView.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }

  getProducts() {
    fetch('/api/products.php')
      .then(response => response.json())
      .then(products => this.setState({ products }));
  }

  getCartItems() {
    fetch('/api/cart.php', {
      method: 'GET'
    })
      .then(response => response.json())
      .then(cart => this.setState({ cart }));
  }

  setView(name, params) {
    this.setState({
      view: {
        name,
        params
      }
    });
  }

  addToCart(product) {
    let cartState = this.state.cart;
    let newCartState = null;

    fetch('/api/cart.php', {
      method: 'POST',
      body: JSON.stringify(product)
    })
      .then(response => response.json())
      .then(addedItem => {
        newCartState = cartState.concat(addedItem);
        this.setState({ cart: newCartState });
      });
  }

  componentDidMount() {
    this.getProducts();
    this.getCartItems();
  }

  render() {
    if (this.state.view['name'] === 'catalog') {
      return (
        <div>
          <Header cartItemCount={this.state.cart.length}/>
          <ProductList viewState={this.setView} products={this.state.products} />
        </div>
      );
    } else if (this.state.view['name'] === 'details') {
      return (
        <div>
          <Header cartItemCount={this.state.cart.length}/>
          <ProductDetails viewState={this.setView} viewParams={this.state.view['params']} addItemToCart={this.addToCart}/>
        </div>
      );
    } else if (this.state.view['name'] === 'cart') {
      return (
        <div>
          <Header cartItemCount={this.state.cart.length}/>
          <CartSummary viewState={this.setView} itemsInCart={this.state.cart}/>
        </div>
      );
    }
  }
}
