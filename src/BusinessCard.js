import React from 'react';
import PropTypes from 'prop-types';

const BusinessCard = () => (
  <section role="main">
    <h1>Angela Cullen</h1>
    <h2>Front-end Web Developer</h2>
    <h3>London, UK</h3>
    <aside>
      <ul>
        <li>
          <address>
            <a 
              title="Email" 
              href="mailto:esme.armitage[REMOVE-THIS-PART]@gmail.com" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <i className="icon icon-mail">
                <span aria-label="Email" className="sr-only">
                  Email
                </span>
              </i>
            </a>
          </address>
        </li>
        <li>
          <a 
            title="LinkedIn" 
            href="https://uk.linkedin.com/in/angelacullen1" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <i className="icon icon-linkedin">
              <span aria-label="LinkedIn" className="sr-only">
                LinkedIn
              </span>
            </i>
          </a>
        </li>
        <li>
          <a 
            title="GitHub" 
            href="https://github.com/NuclearError" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <i className="icon icon-github">
              <span aria-label="GitHub" className="sr-only">
                GitHub
              </span>
            </i>
          </a>
        </li>
      </ul>
    </aside>
  </section>
);

BusinessCard.defaultProps = {
  //
};

BusinessCard.propTypes = {
  //
};

export default BusinessCard;