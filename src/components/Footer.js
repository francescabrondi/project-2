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
        <i class="fab fa-instagram"></i>
        <i class="fab fa-facebook"></i>
        <i class="fab fa-twitter"></i>
        <i class="fab fa-pinterest"></i>
        <i class="fas fa-envelope"></i>
      </div>
    </div>
  );
}

export default Footer;
