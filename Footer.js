import React, {useEffect, useState} from 'react';


function Footer (){
    return(
        <React.Fragment>

        <div className="footer flex">
               <div className="block flex flex-col">
               <h2 className="title s16 fontb color"> Popular Categories</h2>
               <p className="noul noulh font s14 color"> Cars </p>
               <p className="noul noulh font s14 color"> Float for rent </p>
               <p className="noul noulh font s14 color"> jobs </p>
               <p className="noul noulh font s14 color"> Mobile phone </p>
            </div>

            <div className="block flex flex-col">
               <h2 className="title s16 fontb color"> Trending Searches</h2>
               <p className="noul noulh font s14 color"> Cars </p>
               <p className="noul noulh font s14 color"> Float for rent </p>
               <p className="noul noulh font s14 color"> jobs </p>
               <p className="noul noulh font s14 color"> Mobile phone </p>
            </div>

            <div className="block flex flex-col">
               <h2 className="title s16 fontb color"> About Us</h2>
               <p className="noul noulh font s14 color"> Cars </p>
               <p className="noul noulh font s14 color"> Float for rent </p>
               <p className="noul noulh font s14 color"> jobs </p>
               <p className="noul noulh font s14 color"> Mobile phone </p>
            </div>

            <div className="block flex flex-col">
               <h2 className="title s16 fontb color"> OLX</h2>
               <p className="noul noulh font s14 color"> Cars </p>
               <p className="noul noulh font s14 color"> Float for rent </p>
               <p className="noul noulh font s14 color"> jobs </p>
               <p className="noul noulh font s14 color"> Mobile phone </p>
            </div>
        </div>

        <div className="footerb flex">
            <h2 className="cfff font s14"> Shoaibkhanu39@gmail.com</h2>
            <h2 className="cfff font s14"> Free classified in Pakistan 2020 Olx </h2>

        </div>
        </React.Fragment>

    )

}

export default Footer;