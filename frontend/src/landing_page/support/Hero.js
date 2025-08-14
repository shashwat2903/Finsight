import React from "react";

function Hero(){
    return(
    <section className="container-fluid" id="supportHero">
      <div className="p-5" id="supportWrapper">
        <h4>Support Portal</h4>
          <a href="https://kite.zerodha.com/connect/login?api_key=supportportal&sess_id=lcSCuE9DGNT8rXV2Hd6rHj9PLosqUXnI">Track Tickets</a>
      </div>
      <div className="row p-5 m-3">
        <div className="col-7 p-3">
            <h1 className="fs-3">
                Search for an answer or browse help topics to create a ticket
            </h1>
            <br />
            <input placeholder="Eg. how do i activate F&O, why is my order getting rejected..."/>
            <br/>
            <a href="https://zerodha.com/open-account">Track account opening</a> &nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://kite.zerodha.com/connect/login?api_key=console&sess_id=2J6TYS06OkjvOQzBn2vKdBsdTVsIJaj1">Track segment activation</a> &nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://zerodha.com/marketintel/bulletin/249809/latest-intraday-leverages-mis-bo-co">Intraday margins</a> &nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://kite.trade/docs/kite/">Kite user manual</a>
        </div>
        <div className="col-5 p-4">
            <h1 className="fs-3">Featured</h1>
            <ol>
                <li><a href="https://zerodha.com/marketintel/bulletin/419005/quarterly-settlement-of-funds-july-2025">Quarterly Settlement of Funds - July 2025</a></li>
                <br/>
                <li><a href="https://zerodha.com/marketintel/bulletin/418412/exclusion-of-fo-contracts-on-8-securities-from-august-29-2025">Exclusion of F&O contracts on 8 securities from August 29, 2025</a></li>
            </ol>
        </div>
      </div>
    </section>
    );
}

export default Hero;