import React from 'react';

export default class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null
    };

    this.backToCatalog = this.backToCatalog.bind(this);
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

  render() {
    if (!this.state.product) {
      return null;
    }

    const productPrice = this.state.product.price;
    const convertedProductPrice = this.convertToDollars(productPrice);
    const angle = '<';

    return (
      <div>
        <div className="productDisplayContainer container col-lg-6" style={{ border: '1px solid black' }}>
          <div className="card">
            <p className="text-muted" onClick={this.backToCatalog} style={{ cursor: 'pointer', marginTop: '20px', marginBottom: '20px' }}>{angle} Back to Catalog</p>
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
            </div>
          </div>
        </div>
      </div>
    );
  }
}
