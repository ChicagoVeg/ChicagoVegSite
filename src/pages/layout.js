/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

 import React, { useEffect, useState } from 'react';
 import PropTypes from 'prop-types';
 import { useStaticQuery, graphql } from 'gatsby';
 import { Modal } from 'react-responsive-modal';
 import Header from './header';
 import 'react-responsive-modal/styles.css';
 import SocialMedia from './socialmedia';
 
 const Layout = ({ children }) => {
   const [open, setOpen] = useState(false);
   const onCloseModal = () => setOpen(false);
 
   const data = useStaticQuery(graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `);
 
   useEffect(() => {
     const { userAgent } = navigator;
     const isIE11 = /MSIE|Trident/.test(userAgent);
 
     setOpen(isIE11);
   }, []);
 
   return (
     <>
       <Header siteTitle={data.site.siteMetadata?.title || 'Title'} />
       <Modal open={open} onClose={onCloseModal} center>
         <p>
           You are using Internet Explorer and it is not supported. Some pages may be distorted. It is
           recommended you use a modern browser like
           {' '}
           {' '}
           <a href="https://www.microsoft.com/en-us/edge" target="_blank" rel="noreferrer">Microsoft Edge</a>
           {' '}
           (successor to Internet Explorer),
           {' '}
           <a href="https://www.google.com/chrome/?brand=UEAD" target="_blank" rel="noreferrer">Chrome</a>
           ,
           {' '}
           <a href="https://www.opera.com" target="_blank" rel="noreferrer">Opera</a>
           {' '}
           or
           {' '}
           <a href="https://www.mozilla.org/en-US/" target="_blank" rel="noreferrer">Firefox</a>
         </p>
       </Modal>
       <div
         className="grid-container"
         style={{
           margin: '0 auto',
           maxWidth: 960,
           padding: '0 1.0875rem 1.45rem',
         }}
       >
         <main className="grid-item">{children}</main>
         <div
           className="grid-item"
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
                 ChicagoVeg - Chicagoland Vegetarian, Vegan, and Raw Foodist Community
               </a>
             </blockquote>
           </div>
         </div>
         <footer className="grid-item">
           <div className="copyright">
             ©
             {' '}
             {new Date().getFullYear()}
             -
             {' '}
             <a href="/" target="_blank" rel="noreferrer">
               <span className="">ChicagoVeg</span>
             </a>
             {' '}
              &nbsp; | &nbsp;
             <a href="contact.html"> Feedback</a>
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
 