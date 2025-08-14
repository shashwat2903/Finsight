import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer style={{backgroundColor: "rgb(250, 250, 250)"}}>
    <div className="container border-top mt-5">
      <div className="row mt-5">
        <div className="col">
          <img src="media/logo.png" style={{width: "50%"}}/>
          <p className="mt-3">&copy; 2010 - 2025, Finsight Broking Ltd. All rights reserved.</p>
        </div>
        <div className="col">
          <p><b>Company</b></p>
          <a href="./about" style={{textDecoration: "none"}} className="text">About</a>
          <br />
          <a href="https://zerodha.com/about/philosophy/" style={{textDecoration: "none"}} className="text">Philosophy</a>
          <br />
          <a href="https://zerodha.com/media/" style={{textDecoration: "none"}} className="text">Press & media</a>
          <br />
          <a href="https://careers.zerodha.com/" style={{textDecoration: "none"}} className="text">Careers</a>
          <br />
          <a href="https://zerodha.com/cares/" style={{textDecoration: "none"}} className="text">Finsight Cares (CSR)</a>
          <br />
          <a href="https://zerodha.tech/" style={{textDecoration: "none"}} className="text">Finsight.tech</a>
          <br />
          <a href="https://zerodha.com/open-source/" style={{textDecoration: "none"}} className="text">Open source</a>
          <br />
        </div>
        <div className="col">
          <p><b>Support</b></p>
          <a href="https://zerodha.com/contact/" style={{textDecoration: "none"}} className="text">Contact us</a>
          <br />
          <a href="https://support.zerodha.com/" style={{textDecoration: "none"}} className="text">Support portal</a>
          <br />
          <a href="https://support.zerodha.com/category/your-zerodha-account/your-profile/ticket-creation/articles/how-do-i-create-a-ticket-at-zerodha" style={{textDecoration: "none"}} className="text">How to file a complaint?</a>
          <br />
          <a href="https://support.zerodha.com/category/your-zerodha-account/your-profile/ticket-creation/articles/track-complaints-or-tickets" style={{textDecoration: "none"}} className="text">Status of your complaints</a>
          <br />
           <a href="https://zerodha.com/marketintel/bulletin/" style={{textDecoration: "none"}} className="text">Bulletin</a>
          <br />
           <a href="https://zerodha.com/marketintel/circulars/" style={{textDecoration: "none"}} className="text">Circular</a>
          <br />
           <a href="https://zerodha.com/z-connect/" style={{textDecoration: "none"}} className="text">F-Connect blog</a>
          <br />
           <a href="https://zerodha.com/resources/" style={{textDecoration: "none"}} className="text">Downloads & resources</a>
          <br />
        </div>
        <div className="col">
          <p><b>Account</b></p>
          <a href="https://zerodha.com/open-account/" style={{textDecoration: "none"}} className="text">Open demat account</a>
          <br />
          <a href="https://zerodha.com/open-account/minor/" style={{textDecoration: "none"}} className="text">Minor demat account</a>
          <br />
          <a href="https://zerodha.com/open-account/nri/" style={{textDecoration: "none"}} className="text">NRI demat account</a>
          <br />
          <a href="https://zerodha.com/commodities/" style={{textDecoration: "none"}} className="text">Commodity</a>
          <br />
          <a href="https://zerodha.com/dematerialise/" style={{textDecoration: "none"}} className="text">Dematerialisation</a>
          <br />
          <a href="https://zerodha.com/fund-transfer/#tab-deposit_funds/" style={{textDecoration: "none"}} className="text">Fund transfer</a>
          <br />
          <a href="https://zerodha.com/mtf/" style={{textDecoration: "none"}} className="text">MTF</a>
          <br />
          <a href="https://zerodha.com/refer/" style={{textDecoration: "none"}} className="text">Referral program</a>
          <br />
        </div>
        <div className="col">
          <p><b>Quick links</b></p>
          <a href="https://zerodha.com/ipo/" style={{textDecoration: "none"}} className="text">Upcoming IPOs</a>
          <br />
          <a href="https://zerodha.com/charges/#tab-equities" style={{textDecoration: "none"}} className="text">Brokerage charges</a>
          <br />
          <a href="https://zerodha.com/marketintel/holiday-calendar/" style={{textDecoration: "none"}} className="text">Market holidays</a>
          <br />
          <a href="https://zerodha.com/markets/calendar/" style={{textDecoration: "none"}} className="text">Economic calendar</a>
          <br />
          <a href="https://zerodha.com/calculators/" style={{textDecoration: "none"}} className="text">Calculators</a>
          <br />
          <a href="https://zerodha.com/markets/stocks/" style={{textDecoration: "none"}} className="text">Markets</a>
          <br />
          <a href="https://zerodha.com/markets/sector/" style={{textDecoration: "none"}} className="text">Sectors</a>
          <br />
        </div>
      </div>
      <div className="mt-5 text-muted" style={{fontSize: "14px"}}>
      <p>
        Finsight Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
        no.: INZ000031633 CDSL/NSDL: Depository services through Finsight
        Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading
        through Finsight Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI
        Registration no.: INZ000038238 Registered Address: Finsight Broking
        Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School,
        J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any
        complaints pertaining to securities broking please write to <a href="">complaints@finsight.com</a>, for DP related to <a href="">dp@finsight.com</a>. Please
        ensure you carefully read the Risk Disclosure Document as prescribed by
        SEBI | ICF
      </p>

      <p>
        Procedure to file a complaint on <a href="https://scores.sebi.gov.in/">SEBI SCORES:</a> Register on SCORES portal.
        Mandatory details for filing complaints on SCORES: Name, PAN, Address,
        Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy
        redressal of the grievances
      </p>

      <p>
        <a href="https://smartodr.in/login" style={{textDecoration: "none"}}>Smart Online Dispute Resolution</a> | <a href="https://zerodha-common.s3.ap-south-1.amazonaws.com/Downloads-and-resources/Smart%20ODR%20info.pdf" style={{textDecoration: "none"}}>Grievances Redressal Mechanism</a>
      </p>

      <p>
        Investments in securities market are subject to market risks; read all
        the related documents carefully before investing.
      </p>

      <p>
        Attention investors: 1) Stock brokers can accept securities as margins
        from clients only by way of pledge in the depository system w.e.f
        September 01, 2020. 2) Update your e-mail and phone number with your
        stock broker / depository participant and receive OTP directly from
        depository on your e-mail and/or mobile number to create pledge. 3)
        Check your securities / MF / bonds in the consolidated account statement
        issued by NSDL/CDSL every month.
      </p>

      <p>
        "Prevent unauthorised transactions in your account. Update your mobile
        numbers/email IDs with your stock brokers. Receive information of your
        transactions directly from Exchange on your mobile/email at the end of
        the day. Issued in the interest of investors. KYC is one time exercise
        while dealing in securities markets - once KYC is done through a SEBI
        registered intermediary (broker, DP, Mutual Fund etc.), you need not
        undergo the same process again when you approach another intermediary."
        Dear Investor, if you are subscribing to an IPO, there is no need to
        issue a cheque. Please write the Bank account number and sign the IPO
        application form to authorize your bank to make payment in case of
        allotment. In case of non allotment the funds will remain in your bank
        account. As a business we don't give stock tips, and have not authorized
        anyone to trade on behalf of others. If you find anyone claiming to be
        part of Finsight and offering such services, please <a href="https://support.zerodha.com/category/your-zerodha-account/your-profile/ticket-creation/articles/how-do-i-place-a-complaint-at-zerodha" style={{textDecoration: "none"}}>create a ticket here.</a>
      </p>
      </div>
      <div className="footer-graveyard-links text-center">
        <p>
            <a href="https://www.nseindia.com/" style={{textDecoration: "none"}} className="text">NSE</a>  &nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://www.bseindia.com/" style={{textDecoration: "none"}} className="text">BSE</a>  &nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://www.mcxindia.com/" style={{textDecoration: "none"}} className="text">MCX</a>  &nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://zerodha.com/terms-and-conditions/" style={{textDecoration: "none"}} className="text">Terms & conditions</a>  &nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://zerodha.com/policies-and-procedures/" style={{textDecoration: "none"}} className="text">Policies & procedures</a>  &nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://zerodha.com/privacy-policy/" style={{textDecoration: "none"}} className="text">Privacy policy</a>  &nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://zerodha.com/disclosure/" style={{textDecoration: "none"}} className="text">Disclosure</a>  &nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://zerodha.com/investor-attention/" style={{textDecoration: "none"}} className="text">For investor's attention</a>  &nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://zerodha.com/tos/investor-charter/" style={{textDecoration: "none"}} className="text">Investor charter</a>  &nbsp;&nbsp;&nbsp;&nbsp;
        </p>
      </div>
    </div>
    </footer>
  );
}

export default Footer;
