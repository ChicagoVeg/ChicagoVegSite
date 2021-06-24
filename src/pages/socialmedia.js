import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const SocialMedia = () => {
  const openSocialMedia = (e) => {
    const target = e.currentTarget;

    const { url } = target.dataset;
    const top = '500';
    const left = '500';
    const width = '400';
    const height = '400';
    const chicagoVegSite = 'http://www.chicagoveg.com';

    window.open(
      `${url}${chicagoVegSite},  _blank, toolbar=no, scrollbars=yes, resizable=yes, top= ${top}, left=${left}, width=${width}, height=${height}`,
    );
  };

  return (
    <section>
      <article className="text-center">
        <ul className="list-inline">
          <li>
            <button
              type="button"
              className="button-styled-like-link"
              href="!#"
              data-url="http://twitter.com/share?text=Check out ChicagoVeg- ;url="
              onClick={openSocialMedia}
            >
              <StaticImage src="../images/twitter.png" alt="Twitter" />
            </button>
          </li>
          <li>
            <a href="./contact.html">
              <StaticImage src="../images/email.png" alt="Contact" />
            </a>
          </li>
          <li>
            <a
              href="http://www.meetup.com/ChicagoVeg/"
              target="_blank"
              rel="noreferrer"
            >
              <StaticImage src="../images/meetup.png" alt="Meetup" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/ChicagoVeg/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa fa-instagram instagramFooterImage" />
            </a>
          </li>
        </ul>
      </article>
    </section>
  );
};

export default SocialMedia;
