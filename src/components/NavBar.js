import React from "react";


const navbar = (
    <div className="headbar">
        <ul className="nav-bar">
            <li className="logo"><a href="">Debit-Credit</a></li>
            <li className="user"><a href="">Welcome, Tabassum Khan</a></li>
            <li className="logout"><a href="">Logout</a></li>
        </ul>
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

function NavBar(){
    return navbar;    
}

export default NavBar;