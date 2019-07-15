import React from 'react';
import Header from './header';
import ProductList from './product-list';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      view: {
        name: 'catalog',
        params: {}
      }
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

  setView(name, params) {
    this.setState({
      view: {
        name,
        params
      }
    });
  }

  render() {
    return (
      <div>
        <img src="/WickedBuyer.png" alt="oneofus"
          style={{
            float: 'right',
            display: 'inline-block',
            width: '28%',
            height: 'auto'
          }}/>
        <Header />
        <ProductList products={this.state.products} />
      </div>
    );
  }
}
