import React from "react";
import "./styles/Passbook.css";

function PassBookOrder(props){
    return(
        <div className="order">
            <span></span>
                <p>{props.order}</p>
                <p>{props.creds} Credits</p>
        </div>
    );
}

export default PassBookOrder;