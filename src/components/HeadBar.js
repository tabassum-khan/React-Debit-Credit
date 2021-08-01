import React from "react";


const headbar = (
    <div className="headbar">
        <div className="search-bar">
        <i className="fa fa-search" aria-hidden="true"></i>
        <input id="search-input" className="form-control" placeholder="Search Transaction" autoComplete="off" spellCheck="false" autoCorrect="off" tabIndex="1"></input>
        </div>

        <div className="transaction-btn">
            <i className="fa fa-handshake-o" aria-hidden="true"></i>
            <button className="btn btn-block">Add Transaction</button>
        </div>
    </div>
);

function HeadBar(){
    return headbar;
}

export default HeadBar;