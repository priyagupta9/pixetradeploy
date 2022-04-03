import React from 'react'
import "./styles/collection.css"
import colimg from "./img/collectionimg.png"
const Collection = () => {
  return (
    <div className="a-box">
    <div className="img-container">
      <div className="img-inner">
        <div className="inner-skew">
            <img src={colimg} alt="img-of-collection"/>
        </div>
      </div>
    </div>
    <div className="collection-text-container">
      <h3>Collection Name</h3>
      <div>
       
    </div>
  </div>
  </div>
  )
}

export default Collection