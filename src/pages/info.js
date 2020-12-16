import React from 'react';
import { Link } from 'gatsby';
import SEO from '../components/seo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';

const Info = () => (
  <>
    <SEO title="Info" />
    <section>
    <article className="">
        <div className="chicago-veg-info-area">
          <div className="missionStatementBox">
            <a href="http://www.meetup.com/ChicagoVeg/events/">
              <h3 className="">News &amp; Events </h3>
              <div className="statement-text">
                <FontAwesomeIcon icon={faCalendar} size="1x" color="Black" />
                <span>Click here for the calendar of our upcoming events.</span>
              </div>
            </a>
          </div>
          <div className="whyVegBox">
            <Link to="/whyveg/">
              <h3 className="">Why Veg?</h3>
              <div className="statement-text">
                <FontAwesomeIcon icon={faCalendar} size="1x" color="Black" />
                <span>Click here to learn why to chose a vegan diet.</span>
              </div>
            </Link>
          </div>
          <div className="donateBox">
            <Link to="/donate/">
              <h3 className="">Donate </h3>
              <div className="statement-text">
                <FontAwesomeIcon icon={faCalendar} size="1x" color="Black" />
                <span>
                  Click here to help us to promote life-saving plant-based diet!
                </span>
              </div>
            </Link>
            </div>
          <div className="programBox">
            <Link to="/programs/">
              <h3 className="">Our Programs </h3>
              <div className="statement-text">
                <FontAwesomeIcon icon={faCalendar} size="1x" color="Black" />
                <span>
                  Click here to learn about programs we offer to serve the
                  community.
                </span>
              </div>
            </Link>
          </div>
        </div>
      </article>
    </section>
  </>
);

export default Info;
