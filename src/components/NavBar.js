import React from "react";


const navbar = (
    <ul className="nav-bar">
        <li className="logo"><a href="">Debit-Credit</a></li>
        <li className="logout"><a href="">Logout</a></li>
    </ul>
);

function NavBar(){
    return navbar;    
}

export default NavBar;