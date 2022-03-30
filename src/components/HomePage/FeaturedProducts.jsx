import React from 'react'
import "./styles/featuredproducts.css"
import FP1 from "./img/FP1.jpg"
const FeaturedProducts = () => {
  return (
    <div className='oneaboveall'>
        <div className="grid">
    <div className="grid__item">
        <div className="card"><img className='card_img' src={FP1} alt="product-img" />
            <div className="card__content">
                <h1 className="card__header">Product Name</h1>
            </div>
        </div>
    </div>
</div>
    </div>
  )}
export default FeaturedProducts