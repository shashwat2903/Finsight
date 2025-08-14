import React from "react";

import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

function PricingPage(){
    return(
    <>
        <Hero />
        <LeftSection 
           imageURL="media/kite.png"
           productName="Kite"
           productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
           tryDemo="https://kite-demo.zerodha.com/dashboard"
           learnMore="https://zerodha.com/products/kite"
           googlePlay="https://play.google.com/store/apps/details?id=com.zerodha.kite3"
           appStore="https://apps.apple.com/in/app/zerodha-kite-trade-invest/id1449453802"
        />
        <RightSection 
           imageURL="media/console.png"
           productName="Console"
           productDescription="The central dashboard for your Finsight account. Gain insights into your trades and investments with in-depth reports and visualisations."
           learnMore="https://zerodha.com/products/console"
        /> 
        <LeftSection 
           imageURL="media/coin.png"
           productName="Coin"
           productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
           tryDemo="https://coin.zerodha.com/"
           //learnMore=""
           googlePlay="https://play.google.com/store/apps/details?id=com.zerodha.kite3"
           appStore="https://apps.apple.com/in/app/zerodha-kite-trade-invest/id1449453802"
        />
        <RightSection 
           imageURL="media/kiteconnect.png"
           productName="Kite Connect API"
           productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
           learnMore="https://zerodha.com/products/api/"
        />
        <LeftSection 
           imageURL="media/varsity.png"
           productName="Varsity mobile"
           productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
         //   tryDemo=""
         //   learnMore=""
           googlePlay="https://play.google.com/store/apps/details?id=com.zerodha.kite3"
           appStore="https://apps.apple.com/in/app/zerodha-kite-trade-invest/id1449453802"
        />
        <p className="text-center mt-5 mb-5">
            Want to know more about our technology stack? Check out the <a href="" style={{textDecoration: "none"}}>Finsight.tech</a> blog.
        </p>
        <Universe />
    </>
    );
}

export default PricingPage;