import React from "react";

function Hero(){
    return(
        <div className="container border-bottom mb-5">
           <div className="text-center mt-5 p-5">
           <h1>Finsight Products</h1>
           <h3 className="text-muted mt-3 fs-4">
              Sleek, modern, and intuitive trading platforms
            </h3>
           <p className="mt-3 mb-5">
            Check out our{" "}
            <a href="https://zerodha.com/investments" style={{textDecoration: "none"}}>
                investment offerings{" "}
                <i class="fa fa-long-arrow-right" />
            </a>
            </p>
           </div>
        </div>
    );
}

export default Hero;