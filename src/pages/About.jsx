import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function About() {
  return (
    <div>
      <h1>GitHub Portfolio</h1>
      <div className="container py-5">
        <div className="card-container">
          {/* Card 1 */}
          <a href="https://github.com/Fredbo561/CineTracker" className="card card1 freddy contact-card movie-card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg">
            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
              <div className="card-content">
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="me-auto">CineTracker</li>
                </ul>
                <div className="github-link">
                  <a href="https://github.com/Fredbo561/CineTracker" target="_blank" rel="noopener noreferrer">
                    <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub Logo" className="github-logo" />
                  </a>
                </div>
              </div>
            </div>
          </a>

          {/* Card 2 */}
          <a href="https://github.com/Fredbo561/TypeScript-and-OOP-Vehicle-Builder" className="card card2 freddy contact-card movie-card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg">
            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
              <div className="card-content">
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="me-auto">Vehicle Builder</li>
                </ul>
                <div className="github-link">
                  <a href="https://github.com/Fredbo561/TypeScript-and-OOP-Vehicle-Builder" target="_blank" rel="noopener noreferrer">
                    <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub Logo" className="github-logo" />
                  </a>
                </div>
              </div>
            </div>
          </a>

          {/* Card 3 */}
          <a href="https://github.com/Fredbo561/README-Generator" className="card card3 freddy contact-card movie-card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg">
            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
              <div className="card-content">
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="me-auto">README Generator</li>
                </ul>
                <div className="github-link">
                  <a href="https://github.com/Fredbo561/README-Generator" target="_blank" rel="noopener noreferrer">
                    <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub Logo" className="github-logo" />
                  </a>
                </div>
              </div>
            </div>
          </a>

          {/* Card 4 */}
          <a href="https://github.com/Fredbo561/VOYAGEONE-PROJECT" className="card card4 freddy contact-card movie-card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg">
            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
              <div className="card-content">
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="me-auto">Voyageone</li>
                </ul>
                <div className="github-link">
                  <a href="https://github.com/Fredbo561/VOYAGEONE-PROJECT" target="_blank" rel="noopener noreferrer">
                    <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub Logo" className="github-logo" />
                  </a>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
    </div>
  );
}
