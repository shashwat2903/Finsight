import React from "react";

function CreateTicket() {
  return (
    <div className="container">
      <div className="row p-4 mt-5 mb-5">
        <h1 className="fs-4 text-muted">
           To create a ticket, select a relevant topic
        </h1>
        <div className="col-4 p-5 mt-2 mb-2">
          <h4 className=""><i class="fa fa-plus-circle" aria-hidden="true"></i>Account opening</h4>
            <a href="https://support.zerodha.com/category/account-opening/resident-individual" style={{textDecoration: "none", lineHeight: "2.5"}}>Resident individual</a>
            <br/>
            <a href="https://support.zerodha.com/category/account-opening/minor" style={{textDecoration: "none", lineHeight: "2.5"}}>Minor</a>
            <br/>
            <a href="https://support.zerodha.com/category/account-opening/nri-account-opening" style={{textDecoration: "none", lineHeight: "2.5"}}>Non Resident Indian (NRI)</a>
            <br/>
            <a href="https://support.zerodha.com/category/account-opening/company-partnership-and-huf-account-opening" style={{textDecoration: "none", lineHeight: "2.5"}}>Company, Partnership, HUF and LLP</a>
            <br/>
            <a href="https://support.zerodha.com/category/account-opening/glossary" style={{textDecoration: "none", lineHeight: "2.5"}}>Glossary</a>
        </div>
        <div className="col-4 p-5 mt-2 mb-2">
          <h4 className=""><i class="fa fa-user" aria-hidden="true"></i> Your Finsight Account</h4>
            <a href="https://support.zerodha.com/category/your-zerodha-account/your-profile" style={{textDecoration: "none", lineHeight: "2.5"}}>Your Profile</a>
            <br/>
            <a href="https://support.zerodha.com/category/your-zerodha-account/account-modification-and-segment-addition" style={{textDecoration: "none", lineHeight: "2.5"}}>Account modification</a>
            <br/>
            <a href="https://support.zerodha.com/category/your-zerodha-account/dp-id-and-bank-details" style={{textDecoration: "none", lineHeight: "2.5"}}>Client Master Report (CMR) and Depository Participant (DP)</a>
            <br/>
            <a href="https://support.zerodha.com/category/your-zerodha-account/nomination-process" style={{textDecoration: "none", lineHeight: "2.5"}}>Nomination</a>
            <br/>
            <a href="https://support.zerodha.com/category/your-zerodha-account/transfer-of-shares-and-conversion-of-shares" style={{textDecoration: "none", lineHeight: "2.5"}}>Transfer and conversion of securities</a>
        </div>
        <div className="col-4 p-5 mt-2 mb-2">
          <h4 className=""><i class="fa fa-bar-chart" aria-hidden="true"></i>Kite</h4>
            <a href="https://support.zerodha.com/category/trading-and-markets/ipo" style={{textDecoration: "none", lineHeight: "2.5"}}>IPO</a>
            <br/>
            <a href="https://support.zerodha.com/category/trading-and-markets/trading-faqs" style={{textDecoration: "none", lineHeight: "2.5"}}>Trading FAQs</a>
            <br/>
            <a href="https://support.zerodha.com/category/trading-and-markets/margins" style={{textDecoration: "none", lineHeight: "2.5"}}>Margin Trading Facility (MTF) and Margins</a>
            <br/>
            <a href="https://support.zerodha.com/category/trading-and-markets/alerts-and-nudges" style={{textDecoration: "none", lineHeight: "2.5"}}>Alerts and Nudges</a>
            <br/>
            <a href="https://support.zerodha.com/category/trading-and-markets/general-kite" style={{textDecoration: "none", lineHeight: "2.5"}}>General</a>
        </div>
        <div className="col-4 p-5 mt-2 mb-2">
          <h4 className=""><i class="fa fa-rub" aria-hidden="true"></i>Funds</h4>
            <a href="https://support.zerodha.com/category/funds/adding-funds" style={{textDecoration: "none", lineHeight: "2.5"}}>Add money</a>
            <br/>
            <a href="https://support.zerodha.com/category/funds/fund-withdrawal" style={{textDecoration: "none", lineHeight: "2.5"}}>Withdraw money</a>
            <br/>
            <a href="https://support.zerodha.com/category/funds/adding-bank-accounts" style={{textDecoration: "none", lineHeight: "2.5"}}>Add bank accounts</a>
            <br/>
            <a href="https://support.zerodha.com/category/funds/mandate" style={{textDecoration: "none", lineHeight: "2.5"}}>eMandates</a>
            <br/>
        </div>
        <div className="col-4 p-5 mt-2 mb-2">
          <h4 className=""><i class="fa fa-bullseye" aria-hidden="true"></i>Console</h4>
            <a href="https://support.zerodha.com/category/console/portfolio" style={{textDecoration: "none", lineHeight: "2.5"}}>Portfolio</a>
            <br/>
            <a href="https://support.zerodha.com/category/console/corporate-actions" style={{textDecoration: "none", lineHeight: "2.5"}}>Corporate actions</a>
            <br/>
            <a href="https://support.zerodha.com/category/console/ledger" style={{textDecoration: "none", lineHeight: "2.5"}}>Funds statement</a>
            <br/>
            <a href="https://support.zerodha.com/category/console/reports" style={{textDecoration: "none", lineHeight: "2.5"}}>Reports</a>
            <br/>
            <a href="https://support.zerodha.com/category/console/profile" style={{textDecoration: "none", lineHeight: "2.5"}}>Profile</a>
            <br/>
            <a href="https://support.zerodha.com/category/console/segments" style={{textDecoration: "none", lineHeight: "2.5"}}>Segments</a>
        </div>
        <div className="col-4 p-5 mt-2 mb-2">
          <h4 className=""><i class="fa fa-ravelry" aria-hidden="true"></i>Coin</h4>
            <a href="https://support.zerodha.com/category/mutual-funds/understanding-mutual-funds" style={{textDecoration: "none", lineHeight: "2.5"}}>Mutual funds</a>
            <br/>
            <a href="https://support.zerodha.com/category/mutual-funds/nps" style={{textDecoration: "none", lineHeight: "2.5"}}>National Pension Scheme (NPS)</a>
            <br/>
            <a href="https://support.zerodha.com/category/mutual-funds/fixed-deposits" style={{textDecoration: "none", lineHeight: "2.5"}}>Fixed Deposit (FD)</a>
            <br/>
            <a href="https://support.zerodha.com/category/mutual-funds/features-on-coin" style={{textDecoration: "none", lineHeight: "2.5"}}>Features on Coin</a>
            <br/>
            <a href="https://support.zerodha.com/category/mutual-funds/payments-and-orders" style={{textDecoration: "none", lineHeight: "2.5"}}>Payments and Orders</a>
            <br/>
            <a href="https://support.zerodha.com/category/mutual-funds/coin-general" style={{textDecoration: "none", lineHeight: "2.5"}}>General</a>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
