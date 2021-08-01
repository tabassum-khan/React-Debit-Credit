import React from "react";

import NavBar from "./NavBar";
import HeadBar from "./HeadBar";
import Footer from "./Footer";

function App(){
    return (
        <div className="container-fluid">
            <NavBar />
            <HeadBar />
            <Footer />
        </div>
    );
}

export default App;