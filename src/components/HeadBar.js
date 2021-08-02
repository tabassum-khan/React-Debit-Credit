import React from "react";


const headbar = (
    <div className="headbar">
        <ul className="nav-bar">
            <li className="logo"><a href="/">Credit-Debit</a></li>
            <li className="user">Welcome, Tabassum Khan</li>
            <li className="logout"><a href="/">Logout</a></li>
        </ul>

        <div className="search-container">
            <div className="search-bar">
                <i className="fa fa-search" aria-hidden="true"></i>
                <input id="search-input" className="form-control" placeholder="Search Customer..." autoComplete="off" spellCheck="false" autoCorrect="off" tabIndex="1"></input>
            </div>

            <div className="customer-btn">
                <button className="btn btn-block">
                    <p className="btn-text">
                        <span>Add Customer</span>
                        <i className="fa fa-user-plus" aria-hidden="true"></i>  
                    </p>
                </button>
            </div>
        </div>
    </div>
);

function HeadBar(){
    return headbar;
}

export default HeadBar;