import React from "react";  
import Modal from "./Modal";

const headbar = (
    <div className="headbar">
        <ul className="nav-bar desktop">
            <li className="logo"><a href="/">Credit-Debit</a></li>
            <li className="user">Welcome, Tabassum Khan</li>
            <li className="logout"><a href="/">Logout</a></li>
        </ul>

        <ul className="nav-bar mobile">
            <li className="logo"><a href="/">Credit-Debit</a></li>
            <li className="menu">
                <img id="img1" src="https://image.flaticon.com/icons/png/512/78/78075.png" alt="menu" />
                <ul className="menu-dropdown">
                    <li>Tabassum Khan</li>
                    <li><a href="/">Logout</a></li>
                </ul>
            </li>
        </ul>

        <div className="search-container">
            <div className="search-bar">
                <i className="fa fa-search" aria-hidden="true"></i>
                <input id="search-input" className="form-control" placeholder="Search Customer..." autoComplete="off" spellCheck="false" autoCorrect="off" tabIndex="1"></input>
            </div>

            <div className="customer-btn" >
                <button className="btn btn-block" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <p className="btn-text">
                        <span>Add Customer</span>
                        <i className="fa fa-user-plus" aria-hidden="true"></i>  
                    </p>
                </button>
                <span className="tooltip-text">Add Customer</span>
            </div>
        </div>

        <Modal />

    </div>
);

function HeadBar(){
    return headbar;
}

export default HeadBar;