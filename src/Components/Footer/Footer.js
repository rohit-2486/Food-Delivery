import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <h3 className="tableDivHeading">- Connected Cities -</h3>
      <div className="tableDiv">
        <div className="listOfTable">
          <ul>
            <li>Mumbai</li>
            <li>Delhi</li>
            <li>Bengaluru</li>
            <li>Hyderabad</li>
            <li>Ahmedabad</li>
          </ul>
        </div>
        <div className="listOfTable">
          <ul>
            <li>Chennai</li>
            <li>Kolkata</li>
            <li>Surat</li>
            <li>Pune</li>
            <li>Jaipur</li>
          </ul>
        </div>
        <div className="listOfTable">
          <ul>
            <li>Lucknow</li>
            <li>Kanpur</li>
            <li>Nagpur</li>
            <li>Indore</li>
            <li>Thane</li>
          </ul>
        </div>
        <div className="listOfTable">
          <ul>
            <li>Bhopal</li>
            <li>Visakhapatnam</li>
            <li>Patna</li>
            <li>Noida</li>
            <li>Vadodara</li>
          </ul>
        </div>
      </div>
      <div className="createdByDiv">
        <p>
          Created by <span>Rohit kumar</span> in 2024.
        </p>
      </div>
    </div>
  );
};

export default Footer;
