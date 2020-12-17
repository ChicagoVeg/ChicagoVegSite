import React from 'react';
import SEO from '../components/seo';

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
              <img
                src={require('../images/PurpleSproutLogo.gif')}
                className=""
                alt="Purple Sprout Cafe"
                width="166"
                height="120"
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
              <img
                src={require('../images/quesadillalareina.jpg')}
                className=""
                alt="Quesadilla La Reina del Sur"
                width="166"
                height="120"
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
              <img
                src={require('../images/AliceFriendsWeb.jpg')}
                className=""
                alt="Adivce and friends restaurant pic"
                width="166"
                height="120"
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
              <img
                src={require('../images/smile-amazon.jpg')}
                className=""
                alt="Smile Amazon"
                width="166"
                height="120"
              />
            </a>
          </div>
        </div>
      </article>
    </section>
  </>
);

export default Sponsors;
