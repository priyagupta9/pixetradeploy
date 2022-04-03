import React from "react";
import Header from "../ProductsPageState/Header";
import PassbookCreds from "./PassbookCreds";
import PassbookOrder from "./PassbookOrder";
import "./styles/Passbook.css";
import BlueBtn from "../OtpPage/BlueBtn";

const data=[1,2,3,4,5,6,7,8,9,10,11,12];
function Passbook(){
    return(
        <div className="pass">
            <Header />
            <div className="credit">
                <PassbookCreds creds="50" />
            </div>
            <div className="passbook-desc">
                <div className="passbook-heading">
                    <h1>Passbook</h1>
                    <p>See All</p>
                </div>
                <div className="passbook-orders">
                {
                    data.map(x => (<PassbookOrder order="OrdervID PIX456" creds="50" />))
                }
                </div>
            </div>
            <div className="love-btn">
                <BlueBtn img="" text="💌 Share the love" />
            </div>
        </div>
    );
}

export default Passbook;