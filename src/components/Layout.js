import React from "react"
import { Link } from "gatsby"
import { createGlobalStyle } from "styled-components"
import "typeface-heebo"
import Seo from "./Seo"
import Footer from "./Footer"
import { motion } from "framer-motion"
import CookieConsent from "react-cookie-consent"
import Navbar from './Navbar/Navbar'


const GlobalStyle = createGlobalStyle`
:root {
  --dark: #1a1a1a;
  --grey: #7c7c7c;
  --highlight: #0075FF;
}

* {
  box-sizing: border-box;
}

body {
  color: var(--dark);
  font-family: Heebo, Arial, Helvetica, 'Helvetica Neue', sans-serif;
  padding: 2rem 1.5rem;
  margin: 0;
  padding: 0;
}

h1,
.title__main {
  font-size: 3.5rem;
  font-weight: 700;
  color: var(--dark);
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
  letter-spacing: -2px;
  line-height: 1.1em;

  &:after {
    content: '.';
    display: inline-block;
    color: var(--highlight);
  }
}

h2 {
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--grey);
  margin-top: 1rem;
  margin-bottom: 1rem;
  line-height: 1.25em;
  letter-spacing: -0.5px;
}

.gatsby-resp-image-wrapper {
  max-width: 800px!important;
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
}

.btn {
    color: var(--highlight);
    font-weight: 700;
    margin-top: 1.25rem;
    font-size: 1.2rem;
    letter-spacing: -0.5px;
    text-decoration: none;
    text-transform: capitalize;
  }

.form-button {
  background-color: #3273dc;
  border-color: transparent;
  color: #fff;
  font-weight: 400;
  margin-top: 1.25rem;
  font-size: 1.2rem;
  letter-spacing: -0.5px;
  border-width: 1px;
  cursor: pointer;
  justify-content: center;
  padding: calc(.5em - 1px) 1em;
  text-align: center;
  white-space: nowrap;  
  -webkit-appearance: none;
  align-items: center;
  border: 1px solid transparent;
  border-radius: 4px;
  box-shadow: none;
  display: inline-flex;
  font-size: 1rem;
  height: 2.5em;
}

.form-field {
  margin-bottom: .75rem;
}

.form-control {
  box-sizing: border-box;
  clear: both;
  position: relative;
  text-align: inherit;
  font-size: 1rem;

}

.form-input {
  box-shadow: inset 0 0.0625em 0.125em rgb(43 37 35 / 5%);
  max-width: 100%;
  width: 100%;
  background-color: #fff;
  border-color: #dbdbdb;
  border-radius: 4px;
  color: #363636;
  -webkit-appearance: none;
  align-items: center;
  border: 1px solid blue;
  border-radius: 4px;
  box-shadow: none;
  display: inline-flex;
  font-size: 1rem;
  height: 2.5em;
  justify-content: flex-start;
  line-height: 1.5;
  padding: calc(.5em - 1px) calc(.75em - 1px);
  position: relative;
  vertical-align: top;  
}

main {
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  padding: 30px 30px 0 30px;
}
`

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Seo />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
        <CookieConsent
          location="bottom"
          buttonText="OK"
          cookieName="kerfSiteCookie"
          expires={150}
          style={{
            background: "#222222",
            padding: "15px 25px",
            fontSize: "16px",
          }}
          buttonStyle={{
            backgroundColor: "#fff",
            color: "#222222",
            fontSize: "16px",
            fontWeight: 700,
            padding: "8px 18px",
          }}
        >
          This website uses cookies to help improve your experience. By using
          this site you agree to the website{" "}
          <Link to="/privacy" style={{ color: "#fff" }}>
            privacy statement
          </Link>
          .
        </CookieConsent>
      </motion.div>
    </>
  )
}

export default Layout
