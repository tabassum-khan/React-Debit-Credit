import React from "react";

const card = (
    <div className="col-lg-4 col-md-6">
        <div className="card">
            <div className="card-header">
                <p>Abdur Rehman</p>
            </div>
            <div className="card-body">
                <p className="transaction-type">You'll Give:</p>
                <p className="balance debit"><strong>Rs. 18,000</strong></p>
            </div>
        </div>
    </div>
);

function Card(){
    return card;    
}

export default Card;