import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from './layout';
import SEO from './seo';

const AboutUsPage = () => (
  <Layout>
    <SEO title="About us" />
    <section>
      <article className="page">
        <h2>About Us</h2>
        <StaticImage className="text-wrap-image page-image" src="../images/aboutus.jpeg" alt="about us" />
        <h3>
          Welcome to ChicagoVeg – Chicagoland Vegetarian, Vegan, Raw Foodist
          Community!
        </h3>
        <p className="">
          ChicagoVeg is the largest Chicagoland community for vegetarians,
          vegans, and raw foodists to socialize and meet like-minded people.
          We organize a range of fun activities and outreach events in the
          city and the suburbs. We welcome everyone who is interested in a
          vegan/vegetarian/raw lifestyle for any reason - ethical,
          environmental, health, or spiritual. We support a nonjudgmental
          community where everyone can feel welcome to express their opinions,
          socialize, and have fun! Some of the fun activities include the
          following: exchanging vegan recipes, vegan potlucks, dining out at
          local vegetarian/vegan/raw restaurants, lectures pertaining to the
          vegetarian/vegan/raw lifestyle, and outreach events that promote a
          vegan lifestyle. We see the importance of educating others about
          advantages of a veg*n lifestyle, and we believe that a supportive
          community is vitally important to sustain a veg*n culture.
        </p>

        <h3>
          Join us for delicious meals, share your favorite recipes, discuss
          living a healthy lifestyle, support green/eco living, promoting
          veg*nism and make new friends!
        </h3>
        <p className="">
          Everyone is welcome, from the vegetarian/vegan/raw food-curious to
          the 100% vegetarian/vegan/raw foodists.
        </p>

        <p className="">
          In addition to our monthly events, ChicagoVeg is also one of the
          lead organizers of the annual Chicago Veggie Pride Parade. The goal
          of the parade is "Celebrating the Healthy Vegan/Vegetarian
          Lifestyle!" Featuring guest speakers, a costume contest, and tons of
          fun, the
          {' '}
          <a href="http://chicago.veggiepride.com">
            Chicago Veggie Pride Parade (CVPP)
            {' '}
          </a>
          {' '}
          is a wonderful all-encompassing event to support local vegans and
          vegetarians, as well as to raise awareness in the general public
          about the benefits of a plant-based diet. We encourage everyone,
          vegans or not vegans, to come and walk, socialize, learn, and of
          course celebrate the Vegan/Vegetarian lifestyle with us! For more
          info about this annual event please visit
          {' '}
          <a
            href="http://chicago.veggiepride.com/"
            target="_blank"
            rel="noreferrer"
            title="Chicago Veggie Pride"
          >
            Chicago.VeggiePride.com
          </a>
        </p>

        <p className="">
          Please visit on
          {' '}
          <a href="http://www.facebook.com/ChicagoVeg">Facebook</a>
          ,
          {' '}
          <a href="http://twitter.com/chicago_veg">Twitter</a>
          ,
          {' '}
          <a href="http://www.youtube.com/ChicagoVeg">YouTube</a>
          , and
          {' '}
          <a href="http://www.myspace.com/ChicagoVeg">MySpace</a>
          .
        </p>
        <p className="">
          ChicagoVeg is an official 501c3 non-profit organization. ChicagoVeg
          EIN: 46-1670886.
        </p>
      </article>
    </section>
  </Layout>
);

export default AboutUsPage;
