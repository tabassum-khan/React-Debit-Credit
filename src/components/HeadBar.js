import React from "react";


const headbar = (
    <div className="headbar">
        <ul className="nav-bar">
            <li className="logo"><a href="/">Credit-Debit</a></li>
            <li className="user">Welcome, Tabassum Khan</li>
            <li className="logout"><a href="/">Logout</a></li>
        </ul>

        <div className="search-bar">
            <i className="fa fa-search" aria-hidden="true"></i>
            <input id="search-input" className="form-control" placeholder="Search Cutsomer..." autoComplete="off" spellCheck="false" autoCorrect="off" tabIndex="1"></input>
        </div>

        <div className="customer-btn">
            <i className="fa fa-handshake-o" aria-hidden="true"></i>
            <button className="btn btn-block">Add Cutsomer</button>
        </div>
    </div>
);

function HeadBar(){
    return headbar;
}

export default HeadBar;