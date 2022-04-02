import React from 'react';
import "./styles/productFlow.css";
import ShowProduct from "./ShowProduct";
import ProductDesc from "./ProductDesc"
import Product from "./img/Product.png";
import "./styles/productFlow.css";
import Delivery from "./Delivery";
import FrequentProduct from '../Sliders/FrequentProducts'
import IdealSlider from "../Sliders/IdealSlider"
import ReviewSlider from "../Sliders/ReviewSlider"
import Btn from "./Btn";
import close from "./img/X.png"

function ProductFlow() {
    return (
    <div className='product-flow'>
        <img src={close} alt="close-nav" className='cross' />
            <div className='slider-box'>
                <FrequentProduct />
            </div>
        <ShowProduct img={Product} />
        <div className='product-content'>
            <ProductDesc 
            prodName="Product Name" 
            price="149" 
            desc="Lorem ipsum dolor sit amet, consect
            etur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore " />
        <div className='ideal-slider-box'>
            <p>Ideal for</p>
            <IdealSlider />
        </div>
            <div className='delivery-box'>
                <Delivery deliveryName="Standard" deliveryPrice="49" emoji="🚲" />
                <Delivery deliveryName="Express" deliveryPrice="89" emoji="🚀" />
            </div>
            <ReviewSlider />
        <Btn text="Want?" emoji="🤩" />
        </div>
    </div>
    );
}

export default ProductFlow;