import React from "react"
import "./index.scss"

export default (props) => {
  const { likedProducts } = props
  const count = likedProducts.length
  
  return (
      <div className="likeCounterComponent">Всего понравилось: {count}</div>
  )
}