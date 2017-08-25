import React from "react"
import "./index.scss"

export default (props) => {
  const { 
    product,
    handleClickLikeProduct,
    handleClickUnlikeProduct
  } = props
  const {
    id,
    title,
    body,
    flag
  } = product

  return (
    <li className="product-component">
      <div>
        <img className="imgPost" src={"http://www.pestworld.org/media/1030/300x200.gif"} alt={title} />
      </div>
      <div className="title">
        {title}
      </div>
      <div>
        {body}
      </div>
      <div>
        {
          flag
            ? (
              <img
								src={"https://maxcdn.icons8.com/Share/icon/Messaging//dislike1600.png"}
								className="imgUnlike"
                onClick={(event) => {
                  event.preventDefault()
                  handleClickUnlikeProduct(id)
                }}
              />
            )
            : (
							<img
								src={"https://maxcdn.icons8.com/Share/icon/Messaging//like1600.png"}
								className="imgLike"
                onClick={(event) => {
                  event.preventDefault()
                  handleClickLikeProduct(product)
                }}
              />
            )
        }
      </div>
    </li>
  )
}