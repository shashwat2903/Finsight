import React from "react";

function RightSection({imageURL, productName, productDescription, tryDemo, learnMore }){
    return(
    <div className="container mt-5">
    <div className="row">
        <div className="col-6 p-5 mt-5">
            <h1>{productName}</h1>
            <p>{productDescription}</p>
            <div>
                <a href={learnMore} style={{textDecoration: "none"}}>
                    Learn More <i class="fa fa-long-arrow-right"/>
                </a>
            </div>
        </div>
        <div className="col-6" style={{ marginTop: productName === "Console" ? "-80px" : "0px" }}>
            <img src={imageURL}/>
        </div>
    </div>
  </div>
    );
}

export default RightSection;