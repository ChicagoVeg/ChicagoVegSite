/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import SocialMedia from '../pages/socialmedia';
import '../styles/styles.scss';
import Header from "./header";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <section>
          <article>
            <div
              className=""
              data-href="https://www.facebook.com/chicagoveg"
              data-adapt-container-width="true"
              data-width="500"
              data-height="500"
              data-small-header="false"
              data-hide-cover="false"
              data-show-facepile="true"
            >
              <div className="">
                <blockquote cite="https://www.facebook.com/chicagoveg">
                  <a href="https://www.facebook.com/chicagoveg">
                    ChicagoVeg - Chicagoland Vegetarian, Vegan, and Raw Foodist
                    Community
                  </a>
                </blockquote>
              </div>
            </div>
          </article>
        </section>
        <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          <div className="copyright">
            © {new Date().getFullYear()}-{" "}
            <a href="/" target="_blank" rel="noreferrer">
              <span className="">ChicagoVeg</span>
            </a>{" "}
            &nbsp; | &nbsp;<a href="contact.html"> Feedback</a>
          </div>
          <SocialMedia />
        </footer>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
