/** @format */

import React from 'react';

const Home = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Chase The Light</h1>

        <h2 className="hero-subtitle">Let Your Soul Shine</h2>

        <button
          type="button"
          className="hero-button"
          onclick="location.href='tours.html'"
        >
          Call To Action Button
        </button>
      </div>
    </section>
  );
};

export default Home;
