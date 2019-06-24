import React from 'react';
import PropTypes from 'prop-types';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

const ShowcaseItem = ({ backgroundColor, title, description, emoji, url }) => (
  <article css={css`background-color: ${backgroundColor};`}>
    <header>
      <a href={url}>
        <h3>
          {emoji ? <span>{emoji}</span> : null}
          <span>{title}</span>
        </h3>
      </a>
    </header>
    {description ? <p>{description}</p> : null}
  </article>
);

ShowcaseItem.defaultProps = {
  backgroundColor: '#000',
  emoji: '',
  description: '',
};

ShowcaseItem.propTypes = {
  backgroundColor: PropTypes.string,
  emoji: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  url: PropTypes.string.isRequired,
};

export default ShowcaseItem;