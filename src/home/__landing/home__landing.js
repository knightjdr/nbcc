import React from 'react';

import LTRI from '../../about/assets/funding/ltri.svg';

import './home__landing.css';

const Landing = () => (
  <section className="home__landing">
    <h1>
      Network biology collaborative centre
    </h1>
    <p>
      Accelerating research by providing integrated services in functional proteomics
      and genomics, drug discovery and high-throughput screening, next-generation
      sequencing and high-content to super-resolution microscopy.
    </p>
    <p>
      NBCC efforts are now directed at helping researchers with COVID19-related research.
      {' '}
      <a href="https://nbcc.lunenfeld.ca/about#contact">Contact us</a>
      {' '}
      to discuss how we can help with your project.
    </p>
    <img
      alt="Lunenfeld-Tanenbaum Research Institute"
      height={50}
      src={LTRI}
      width={318}
    />
  </section>
);

export default Landing;
