import PropTypes from 'prop-types';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

import theme from '../theme';

const articleStyle = css`
  border-radius: 2px;
  padding: ${theme.spacing.md}px;
`;

const h3Style = css`
  margin: 0;
  font-weight: normal;
  font-family: ${theme.fonts.family.serif};
  font-size: ${theme.fonts.size.h3};
  line-height: ${theme.fonts.lineHeight.h3};
  position: relative;
`;

const linkStyle = css`
  color: ${theme.colors.base.black};
  text-decoration: none;
  &:hover,
  &:focus,
  &:active {
    color: ${theme.colors['alt-pink']};
  }
`;

const spanStyle = css`
  vertical-align: top;
`;

const titleStyle = css`
  position: absolute;
  line-height: 22px;

  @media (min-width: ${theme.breakpoints.sm}) {
    line-height: ${theme.fonts.lineHeight.h3};
  }
`;

const emojiStyle = css`
  font-size: 40px;
  position: relative;
  top: 5px;
  right: 5px;
`;

const ShowcaseItem = ({ backgroundColor, title, description, emoji, url }) => (
  <article css={[articleStyle, css`background-color: ${backgroundColor};`]}>
    <header>
      <a href={url} css={linkStyle}>
        <h3 css={h3Style}>
          {emoji ? <span css={[spanStyle, emojiStyle]}>{emoji}</span> : null}
          <span css={[spanStyle, titleStyle]}>{title}</span>
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
