import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logo from "../assets/logo.png";

export function Footer() {
  return (
    <div id='footer'>
      <div id='section1'>
        <img src={logo}/>
        <p>311 West Road, Houston, TX 77038</p>
        <p>info@harriscountyhub.org</p>
        <p>(281)704-0240</p>
      </div>

      <div id="section2">
        <h4>Resource Categories</h4>
        <ul>
          <li>Community Events</li>
          <li>Charities & Non-Profits</li>
          <li>Donation Centers</li>
          <li>Markets & Food</li>
          <li>Libraries & Education</li>
        </ul>
      </div>

      <div id='section3'>
        <h4>Quick Links</h4>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/resources">Resources</Link>
      </div>

    </div>
  );
};