import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>{
<div>
  {links.map((link, index) =>(
    <a key={index} href={`#${link}`}>{link}</a>
  ))}
  </div> 
}</nav>;
};
export default NavBar;
