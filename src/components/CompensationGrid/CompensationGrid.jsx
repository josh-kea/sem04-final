import React from 'react';
import './CompensationGrid.scss';

import GoWhite from './img/go-white.png'
import KsWhite from './img/ks-white.png'
import ShWhite from './img/sh-white.png'

function CompensationGrid() {
    return (
      <div className="compensation-grid">
        <div className="compensation-green-box">
            <img src={GoWhite} alt="Indiegogo Logo" className="compensation-logo logo-1"  alt="whiteone" ></img>
            <img  alt="whitetwo" src={KsWhite} alt="Kickstarter Logo" className="compensation-logo logo-2" ></img>
            <img  alt="whitethree" src={ShWhite} alt="Shopify Logo" className="compensation-logo logo-3"></img>
        </div>

        <div className="compensation-text-box">
          <div className="what-green-heading green-heading">
              <h1 className="green-heading-text">We are committed</h1>
              <div className="green-heading-line"></div>
          </div>
            <h1 className="what-h1">We Work On A Performance-based Compensation Model</h1>
            <p className="what-p">Our collaboration with our clients in crowdfunding is limited in time but not in performance. It is a risk-free model because we only charge a percentage of the revenues that are directly attributed to our efforts. There are no setup, upfront or hidden fees whatsoever.</p>
            <p className="what-p">We work completely transparently and you can end our service at any time.</p>
            <p className="what-p">Our cutting edge crowdfunding ad tech goes hand-in-hand with our marketing and crowdfunding expertise to only bring you the best possible results.
            </p>
            <p className="what-p">Whether you’re looking to start your crowdfunding campaign, are already live with it, need a webstore or just need some expert marketing - we’re here and ready.
            </p>
          </div>
      </div>

    );
  }
  
  export default CompensationGrid;