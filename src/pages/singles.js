import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from './layout';
import SEO from './seo';

const SInglesPage = () => (
  <Layout>
    <SEO title="Singles" />
    <section>
      <article className="page">
        <h2>ChicagoVeg Singles</h2>
        <StaticImage
          className="text-wrap-image page-image"
          src="../images/singles1.jpeg"
          alt="singles"
        />
        <p className="">
          ChicagoVeg Singles is a specialized ChicagoVeg program to enable
          members to socialize, network, and make connections with other singles
          who are interested in a vegan lifestyle! The meetups will provide the
          opportunity for members to mix &amp; mingle in a fun, relaxed
          atmosphere to meet like-minded singles.
        </p>

        <p className="">
          ChicagoVeg Singles events are a great opportunity to:
        </p>
        <ul className="">
          <li>Meet new people</li>
          <li>Find Friendship</li>
          <li>Connect with someone special!</li>
        </ul>
        <p />

        <p className="">
          We support a non-judgmental environment where everybody is welcome to
          join in our meetups regardless of their age, race, religion, sexual
          orientation or other preferences. Our meetups will be dedicated to
          providing a wide variety of events, where our members meet
          face-to-face, in a fun and friendly environment.
        </p>

        <h3>OUR SUCCESS STORY</h3>
        <div className="singles-success">
          <div className="singles-success-image">
            <StaticImage src="../images/singles2.jpeg" alt="single-story" />
          </div>
          <div className="singles-success-message">
            <p>
              Some of you may remember our first ChicagoVeg Singles event at
              Heartland Cafe. It was where and when Siri and Ami met back in
              December, 2010. Many of you may have met them at many ChicagoVeg
              subsequent events (Siri was helping to organize many of them!)
              which they mostly attended together. They got married on May 12,
              2012 and, as of now, are house hunting for their new home. We wish
              them a happy and a long lasting relationship together!
            </p>

            <p>
              Here is the link to the meetup page: &nbsp;
              <a
                href="http://www.Meetup.com/ChicagoVeg/pages/ChicagoVeg_Singles"
                target="_blank"
                rel="noreferrer"
              >
                Meetup.com/ChicagoVeg/pages/ChicagoVeg_Singles
              </a>
            </p>

            <p className="">
              Please don&apos;t hesitate to contact us for any questions or if you
              would like to help organize ChicagoVeg Singles events. Check out
              our upcoming events
              {' '}
              <a
                href="http://www.meetup.com/ChicagoVeg"
                target="_blank"
                rel="noreferrer"
              >
                here
              </a>
              .
            </p>
          </div>
        </div>
      </article>
    </section>
  </Layout>
);

export default SInglesPage;
