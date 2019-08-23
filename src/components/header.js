import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { css } from '@emotion/core';
import styled from '@emotion/styled';

const NavLink = styled(Link)`
  color: #fff;
  font-size: 1rem;
  font-weight: ${props => props.fontWeight || 'normal'};
  line-height: 1;
  margin: 0 0.5rem 0 0;
  padding: 0.25rem;
  text-decoration: none;
  &.current-page {
    border-bottom: 2px solid #fff;
  }
  &:last-of-type {
    margin-right: 0;
  }
`;

const Header = ({ siteTitle }) => (
  <header
    css={css`
      background: green;
      border-bottom: 1px solid #ddd;
      display: flex;
      justify-content: space-between;
      padding: 0.5rem calc((100vw - 800px - 1.1rem) / 2);
    `}
  >
    <NavLink to="/" fontWeight="bold">
      {siteTitle}
    </NavLink>
    <nav
      css={css`
        margin-top: 0;
      `}
    >
      <NavLink to="/blog" activeClassName="current-page">
        Blog
      </NavLink>
      <NavLink to="/about" activeClassName="current-page">
        About
      </NavLink>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header;
