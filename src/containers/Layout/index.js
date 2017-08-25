import React from "react"
import LikeCounterComponent from "./LikeCounter"
import ProductsContainer from "./Products"
import { setLocalStorage, getLocalStorage } from "./helpers"
import { getProductsApi } from "./Products/api"

const DEFAULT_LIKED_PRODUCTS = []
const DEFAULT_PRODUCTS = []

export default class LayoutContainer extends React.PureComponent {
  state = {
    products: DEFAULT_PRODUCTS,
    likedProducts: DEFAULT_LIKED_PRODUCTS
  }
  
  constructor(props) {
    super(props)
  }

  async componentDidMount() {
    const products = await getProductsApi()
    const likedProducts = getLocalStorage("likedProducts")

    this.setState({
      products,
      likedProducts
    })
  }

  handleClickLikeProduct = (product) => {
    this.setState(({ likedProducts }) => {
      likedProducts.push(product)
      return {
        likedProducts: [...likedProducts] 
      }
    }, () => setLocalStorage("likedProducts", this.state.likedProducts))
  }

  handleClickUnlikeProduct = (id) => {
    this.setState(({ likedProducts }) => ({
      likedProducts: likedProducts.filter(product => product.id != id)
    }), () => setLocalStorage("likedProducts", this.state.likedProducts))
  }

  render() {
    const { 
      likedProducts, 
      products 
    } = this.state

    return (
      <div className="layout-container">
        <LikeCounterComponent
          likedProducts={likedProducts}
        />
        <ProductsContainer
          products={products}
          likedProducts={likedProducts}
          handleClickLikeProduct={this.handleClickLikeProduct} 
          handleClickUnlikeProduct={this.handleClickUnlikeProduct}
        />
      </div>
    )
  }
}