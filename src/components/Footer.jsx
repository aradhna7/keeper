import React from "react";


function Footer(){
    const d=new Date();
    const y=d.getFullYear();
   return <footer className="footer"><p className="footer p">Copyright @ {y}</p></footer>;
}

export default Footer;