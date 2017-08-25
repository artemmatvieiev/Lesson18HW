import React from "react"
import ProductComponent from "../Product"
import "./index.scss"

export default class ProductsContainer extends React.PureComponent {
  state = {
    products: []
  }

  constructor(props) {
    super(props)
  }

  componentWillReceiveProps({ products, likedProducts }) {
    const updatedProducts = products.reduce((acc, product) => {
      acc.push({ 
        ...product,
        flag: !!~likedProducts.findIndex(({ id }) => id == product.id)
      })
      return acc
    }, [])
    this.setState({
      products: updatedProducts
    })
  }

  render() {
    const { products } = this.state
    const { 
      handleClickLikeProduct,
      handleClickUnlikeProduct
    } = this.props
    
    return (
      <ul className="products-container">
        {
          products.map((product, index) => <ProductComponent 
            product={product}
            handleClickLikeProduct={handleClickLikeProduct}
            handleClickUnlikeProduct={handleClickUnlikeProduct}
            key={index}
          />)
        }
      </ul>
    )
  }
}