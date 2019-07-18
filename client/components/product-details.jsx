import React from 'react';

export default class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null
    };

    this.backToCatalog = this.backToCatalog.bind(this);
    this.addProductToCart = this.addProductToCart.bind(this);
  }

  componentDidMount() {
    fetch('/api/products.php?id=' + this.props.viewParams['id'])
      .then(response => response.json())
      .then(product => this.setState({ product }));
  }

  convertToDollars(num) {
    let convertedNum = null;

    convertedNum = (num / 100).toFixed(2);
    return `$${convertedNum}`;
  }

  backToCatalog() {
    this.props.viewState('catalog', {});
  }

  addProductToCart() {
    // console.log(this.state.product);
    this.props.addItemToCart(this.state.product);
  }

  render() {
    if (!this.state.product) {
      return null;
    }

    const productPrice = this.state.product.price;
    const convertedProductPrice = this.convertToDollars(productPrice);

    return (
      <div>
        <div className="productDisplayContainer container col-lg-6" style={{ marginLeft: '3.5rem' }}>
          <div className="card">
            <h4 className="text-muted" onClick={this.backToCatalog} style={{ cursor: 'pointer', marginTop: '20px', marginBottom: '20px' }}>&lt; Back to Catalog</h4>
            <div className="topHalfContainer" style={{ paddingBottom: '100px' }}>
              <div className="productImgContainer col-lg-6" style={{ display: 'inline-block' }}>
                <img className="productImg img-responsive"
                  src={this.state.product.image}/>
              </div>
              <div className="productInfoContainer col-lg-6"
                style={{
                  textAlign: 'left',
                  display: 'inline-block',
                  float: 'right'
                }}>
                <h2 className="productName" style={{ marginTop: '0px' }}>{this.state.product.name}</h2>
                <h3 className="productPrice text-muted">{convertedProductPrice}</h3>
                <h4 className="productShortDesc" style={{ marginTop: '20px' }}>{this.state.product.shortDescription}</h4>
              </div>
            </div>
            <div className="productLongDescContainer"
              style={{
                display: 'inline-block',
                marginTop: '20px',
                marginBottom: '20px'
              }}>
              <div className="productLongDesc">{this.state.product.longDescription}</div>
              <button className="btn btn-primary btn-lg" style={{ marginTop: '20px' }} onClick={this.addProductToCart}>Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
