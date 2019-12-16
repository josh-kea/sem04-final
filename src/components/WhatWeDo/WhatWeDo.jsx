import React from 'react';
import './WhatWeDo.scss';

function WhatWeDo() {
    return (
      <div className="what-we-do-grid">
        <div className="what-bar-chart"></div>
        <div className="what-text-box">
          <div className="what-green-heading">
            <h1 className="green-heading-text">It's a new era of e-commerce</h1>
            <div className="green-heading-line"></div>
          </div>
          <h1 className="what-h1">What We Do</h1>
          <p className="what-p">We help creators efficiently scale their crowdfunding and E-commerce projects by reaching new audiences using high-precision advertising on Facebook and Google.</p>
          <p className="what-p">It’s no longer creators with great ideas anymore. It’s serious companies with serious products. It’s a GTM strategy, a call for distributors, a POC for investors. It’s E-commerce.</p>
        </div>
      </div>
    );
  }
  
  export default WhatWeDo;