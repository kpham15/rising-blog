import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import headerStyles from "./header.module.scss"

const Header = ({ siteTitle }) => (
  <header className={headerStyles.header}>
    <h1 className={headerStyles.title}>{siteTitle}</h1>
    <ol className={headerStyles.navList}>
      <li>
        <Link
          to="/"
          className={headerStyles.navItem}
          activeClassName={headerStyles.activeNavItem}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="/about"
          className={headerStyles.navItem}
          activeClassName={headerStyles.activeNavItem}
        >
          About
        </Link>
      </li>
      <li>
        <Link
          to="/teams"
          className={headerStyles.navItem}
          activeClassName={headerStyles.activeNavItem}
        >
          Teams
        </Link>
      </li>
      <li>
        <Link
          to="/contact"
          className={headerStyles.navItem}
          activeClassName={headerStyles.activeNavItem}
        >
          Contact Us
        </Link>
      </li>
    </ol>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
