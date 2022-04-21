import React from "react";
import Header from "../HomePage/Header";
import PassBookCreds from "./PassBookCreds";
import PassBookOrder from "./PassBookOrder";
import "./styles/Passbook.css";

const data=[1,2,3,4,5,6,7,8,9,10,11,12];
function PassBook(){
    return(
        <div className="pass">
            <Header name="Priya" />
            <div className="credit flex">
                <PassBookCreds creds="50" />
            </div>
            <div className="passBook-desc">
                <div className="passBook-heading flex">
                    <h1>PassBook</h1>
                    <p>See All</p>
                </div>
                <div className="passBook-orders">
                {
                    data.map(x => (<PassBookOrder order="OrdervID PIX456" creds="50" />))
                }
                </div>
            </div>
            <div className="love-box">
                <div className="love-btn">
                    <p className="blue-text">💌 Share the love</p>
                </div>
            </div>
            </div>
    );
}

export default PassBook;