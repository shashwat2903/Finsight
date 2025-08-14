import React from "react";
import "./Universe.css";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The Finsight Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3 mt-5 text">
          <a href="https://www.zerodhafundhouse.com/"><img src="media/finsightFundhouse.png" style={{width: "75%"}}/></a>
          <p className="text-small text-muted mt-3">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4 p-3 mt-5 text">
          <a href="https://sensibull.com/"><img className="mt-2" src="media/sensibullLogo.svg" style={{width: "70%"}}/></a>
          <p className="text-small text-muted mt-4">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-4 p-3 mt-5 text">
          <a href="https://www.tijorifinance.com/ideas-dashboard/"><img src="media/tijori.svg" style={{width: "50%"}}/></a>
          <p className="text-small text-muted mt-3">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>
        <div className="col-4 p-3 mt-5 text">
          <a href="https://www.streak.tech/home"><img src="media/streakLogo.png" style={{width: "70%"}}/></a>
          <p className="text-small text-muted mt-2">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
        <div className="col-4 p-3 mt-5 text">
          <a href="https://smallcase.zerodha.com/"><img src="media/smallcaseLogo.png" style={{width: "75%"}}/></a>
          <p className="text-small text-muted mt-4">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4 p-3 mt-5 text">
          <a href="https://joinditto.in/"><img src="media/dittoLogo.png" style={{width: "50%"}}/></a>
          <p className="text-small text-muted mt-4">
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>
        <a href="./signup">
        <button
          className="p-2 btn btn-primary fs-5 mb-5 mt-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Sign up for free
        </button>
        </a>
      </div>
    </div>
  );
}

export default Universe;
