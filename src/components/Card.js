import React from "react";

const card = (
    <div className="col-xl-3 col-lg-4 col-sm-6">
        <div className="card">
            <div className="card-header">
                <div className="customer-name">
                    <input type="text" className="form-control" placeholder="Enter Customer Name"/>  
                    <i className="fa fa-trash" aria-hidden="true">
                        <span className="tooltip-text">Delete</span>
                    </i>
                </div>
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