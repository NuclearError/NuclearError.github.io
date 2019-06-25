/** @jsx jsx */
import { css, jsx } from '@emotion/core';

import theme from '../theme';

import showcaseData from './showcaseData';
import ShowcaseItem from './ShowcaseItem';

const listStyle = css`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const listItemStyle = css`
  margin: ${theme.spacing.md}px 0;
  padding: 0;
`;

const Showcase = () => {
  return (
  <section>
    <ul css={listStyle}>
      {showcaseData.map(item => (
          <li key={item.title} css={listItemStyle}>
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
