import React from "react";
import { Link } from "react-router-dom";
import "./modulePage.css"; // Create a CSS file for this component

export const ModulePage3: React.FC = () => {
  return (
    <div className="module-page">
      <aside className="module-sidebar">
        <Link to="/modules" className="back-button">Back to Modules</Link>
        <nav className="module-contents">
          <h3>Contents</h3>
          <ul>
            <li><a href="#section1">1.1. Topic One</a></li>
            <li><a href="#section2">1.2. Topic Two</a></li>
            <li><a href="#section3">1.3. Topic Three</a></li>
            <li><a href="#quiz">1.4. Knowledge Checker</a></li>
          </ul>
        </nav>
      </aside>
      <main className="module-content">
        <h2>Module Title</h2>

        <section id="section1">
          <h3>1.1. Topic One</h3>
          <p>Content for Topic One...</p>
          <a href="#section1-more">More Details...</a>
        </section>

        <section id="section2">
          <h3>1.2. Topic Two</h3>
          <p>Content for Topic Two...</p>
          <a href="#section2-more">More Details...</a>
        </section>

        <section id="section3">
          <h3>1.3. Topic Three</h3>
          <p>Content for Topic Three...</p>
          <a href="#section3-more">More Details...</a>
        </section>

        <section id="quiz">
          <h3>1.4. Knowledge Checker</h3>
          <p>Quiz questions go here...</p>
        </section>

        <div className="navigation-buttons">
          <button className="prev-button">Previous Chapter</button>
          <button className="next-button">Next Chapter</button>
        </div>
      </main>
    </div>
  );
};