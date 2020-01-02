import React from 'react';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";


  const divStyle = {
    margin: '40px',
    border: '5px solid pink'
  };

export default function Navbar() {
return (
    <div style={divStyle}>   
    <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
    </div>
)
}