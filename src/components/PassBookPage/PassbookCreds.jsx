import React from "react";
import "./styles/Passbook.css";

function PassbookCreds(props){
    return(
        <div className="creds">
            <span className="cash">💸</span>
            <h1 className="cash-pts">Credits: <span>{props.creds}</span></h1>
        </div>
    )
}

export default PassbookCreds;