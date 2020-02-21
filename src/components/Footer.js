import React from "react";

function Footer() {
  return (
    <div className="footer">
      <div className="logo">
        <p>FOOD</p> <span>HUB</span>{" "}
      </div>
      {/* <div className="copyright">
        <i class="far fa-copyright">
          {" "}
          <span className="copy">2020 WIld Code School - Milano</span>{" "}
        </i>
      </div> */}
      <div className="socials">
        <i class="fab fa-instagram fa-2x"></i>
        <i class="fab fa-facebook fa-2x"></i>
        <i class="fab fa-twitter fa-2x"></i>
        <i class="fab fa-pinterest fa-2x"></i>
        <i class="fas fa-envelope fa-2x"></i>
      </div>
    </div>
  );
}

export default Footer;
