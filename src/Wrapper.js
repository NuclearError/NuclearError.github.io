import PropTypes from 'prop-types';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

import theme from './theme';

const wrapperStyle = css`
  margin: 0;

  @media (min-width: ${theme.breakpoints.sm}) {
    margin: ${theme.spacing.xxl}px auto 0;
    width: 340px;
  }
`;

const Wrapper = ({ children }) => {
  return (
  <div css={wrapperStyle}>
    {children}
  </div>
)};

Wrapper.defaultProps = {
  children: null,
};

Wrapper.propTypes = {
  children: PropTypes.node,
};

export default Wrapper;
