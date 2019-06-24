import React from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

import showcaseData from './showcaseData';
import ShowcaseItem from './ShowcaseItem';

const Showcase = () => {

  return (
  <section>
    <ul>
      {showcaseData.map(item => (
          <li key={item.title}>
            <ShowcaseItem 
              backgroundColor={item.backgroundColor} 
              title={item.title} 
              description={item.description} 
              emoji={item.emoji} 
              url={item.url}
            />
          </li>
        ))
      }
    </ul>
  </section>
)};

export default Showcase;