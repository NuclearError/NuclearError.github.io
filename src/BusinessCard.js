/** @jsx jsx */
import { css, jsx } from '@emotion/core';

import theme from './theme';

const sectionStyle = css`
  padding: ${theme.spacing.md}px ${theme.spacing.md}px ${theme.spacing.lg}px;
  color: ${theme.colors.base.black};
  background-color: ${theme.colors.cyan};
  border-radius: 2px;
`;

const asideStyle = css`
  padding: ${theme.spacing.lg}px 0;
  & ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  & li {
     padding-left: ${theme.spacing.lg}px;
     display: inline-block;

     &:first-child {
       padding-left: 0;
     }

     @media (min-width: ${theme.breakpoints.sm}) {
       padding-left: 0;
     }
   }

   @media (min-width: ${theme.breakpoints.sm}) {
     padding: ${theme.spacing.xs}px 0;

     & [class^="icon-"]:before,
     & [class*=" icon-"]:before {
   		margin-right: ${theme.spacing.md}px;
   	}
   }
`;

const headingStyle = css`
  margin: 0;
  font-weight: normal;
  font-family: ${theme.fonts.family.serif};
`;

const h1Style = css`
  font-size: ${theme.fonts.size.h1};
  line-height: ${theme.fonts.lineHeight.h1};
`;

const h2Style = css`
  font-size: ${theme.fonts.size.h2};
  line-height: ${theme.fonts.lineHeight.h1};
`;

const h3Style = css`
  font-size: ${theme.fonts.size.h3};
  line-height: ${theme.fonts.lineHeight.h3};
`;

const linkStyle = css`
  color: ${theme.colors.base.black};
  &:hover,
  &:focus,
  &:active {
    color: ${theme.colors['alt-pink']};
  }
`;

const iconStyle = css`
  font-size: ${theme.fonts.size.h1};
  line-height: ${theme.fonts.size.h1};
`;

const screenReaderStyle = css`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0,0,0,0);
  border: 0;
`;

const BusinessCard = () => (
  <section role="main" css={sectionStyle}>
    <h1 css={[headingStyle, h1Style]}>Angela Cullen</h1>
    <h2 css={[headingStyle, h2Style]}>Front-end Web Developer</h2>
    <h3 css={[headingStyle, h3Style]}>London, UK</h3>
    <aside css={asideStyle}>
      <ul>
        <li>
          <address>
            <a
              css={linkStyle}
              title="Email"
              href="mailto:esme.armitage[REMOVE-THIS-PART]@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i css={iconStyle} className="icon icon-mail">
                <span aria-label="Email" css={screenReaderStyle}>
                  Email
                </span>
              </i>
            </a>
          </address>
        </li>
        <li>
          <a
            css={linkStyle}
            title="LinkedIn"
            href="https://uk.linkedin.com/in/angelacullen1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i css={iconStyle} className="icon icon-linkedin">
              <span aria-label="LinkedIn" css={screenReaderStyle}>
                LinkedIn
              </span>
            </i>
          </a>
        </li>
        <li>
          <a
            css={linkStyle}
            title="GitHub"
            href="https://github.com/NuclearError"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i css={iconStyle} className="icon icon-github">
              <span aria-label="GitHub" css={screenReaderStyle}>
                GitHub
              </span>
            </i>
          </a>
        </li>
      </ul>
    </aside>
  </section>
);

export default BusinessCard;
