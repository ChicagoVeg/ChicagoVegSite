import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import SEO from './seo';

const Sponsors = () => (
  <>
    <SEO title="Sponsors" />
    <section>
      <article>
        <h3 className="text-center">Sponsors</h3>
        <div className="sponsors">
          <div className="sponsor-item">
            <a
              href="https://www.facebook.com/PurpleSproutCafe"
              target="_blank"
              rel="noreferrer"
              title="Purple Sprout Cafe"
            >
              <StaticImage
                src="../images/PurpleSproutLogo.gif"
                className=""
                alt="Purple Sprout Cafe"
              />
            </a>
          </div>
          <div className="sponsor-item">
            <a
              href="http://quesadillalareinadelsur.com/"
              target="_blank"
              rel="noreferrer"
              title="Quesadilla La Reina del Sur"
            >
              <StaticImage
                src="../images/quesadillalareina.jpg"
                className=""
                alt="Quesadilla La Reina del Sur"
              />
            </a>
          </div>
          <div className="sponsor-item">
            <a
              href="http://aliceandfriendsvegankitchen.com"
              target="_blank"
              rel="noreferrer"
              title="Alice and friends restaurant"
            >
              <StaticImage
                src="../images/AliceFriendsWeb.jpg"
                className=""
                alt="Adivce and friends restaurant pic"
              />
            </a>
          </div>
          <div className="sponsor-item">
            <a
              href="https://smile.amazon.com/ch/46-1670886"
              target="_blank"
              rel="noreferrer"
              title="Smile Amazon"
            >
              <StaticImage
                src="../images/smile-amazon.jpg"
                className=""
                alt="Smile Amazon"
              />
            </a>
          </div>
        </div>
      </article>
    </section>
  </>
);

export default Sponsors;
