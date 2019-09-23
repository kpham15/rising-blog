import React from "react"

import footerStyles from "./footer.module.scss"

const Footer = () => {
  return (
    <div className={footerStyles.footer}>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </div>
  )
}

export default Footer
