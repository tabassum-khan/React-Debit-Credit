import React from "react";

import HeadBar from "./HeadBar";
import Card from "./Card";
import Footer from "./Footer";

function App(){
    return (
        <div className="container-fluid">
            <HeadBar />
            <div className = "card-container row ">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <Footer />
        </div>
    );
}

export default App;