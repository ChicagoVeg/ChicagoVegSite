import React from "react";
import Layout from "../components/layout";
import Info from '../pages/info';
import Sponsors from '../pages/sponsors';
import FacebookLink from '../pages/facebooklink';
import ResponsiveCarousel from '../pages/carousel';
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section>
      <article>
        <h1>A Chicagoland Vegetarian, Vegan, &amp; Raw Foodist Community</h1>
        <p>
          We are a non-for-profit organization to support all vegetarians/vegans
          and educate the public about the advantages of a plant-based diet.
          Join us for delicious meals, share your favorite recipes, discuss
          living a healthy and compassionate lifestyle, support the green
          movement, conscious living, and make new friends! We regularly meet in
          the city and suburbs for dining, picnics, lectures, movies, visiting
          local expos, and other events. Click{" "}
          <a href="https://www.meetup.com/ChicagoVeg/">
            <span className="bold">HERE</span>
          </a>{" "}
          to join our community to learn and participate in our upcoming events.
        </p>
      </article>
      <ResponsiveCarousel />
      <Info />
      <Sponsors />
      <FacebookLink />
    </section>
  </Layout>
);

export default IndexPage;
