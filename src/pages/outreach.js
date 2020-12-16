import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

const OutreachPage = () => (
  <Layout>
    <SEO title="Outreach" />
    <section>
      <article className="page">
        <h2>ChicagoVeg Outreach</h2>
        <img className="text-wrap-image page-main-image" src={require('../images/outreach.jpg')} alt="outreach" />
        <p className="">
          ChicagoVeg Outreach is an extension of ChicagoVeg – Chicagoland
          Vegetarian, Vegan, & Raw Food Community.
        </p>
        <p className="">
          The mission of the ChicagoVeg Outreach is to enable members to make a
          positive difference by educating others that we can all live happy and
          healthy lives following a vegan/vegetarian diet. We know there are
          numerous benefits of a plant-based diet: health benefits, ethical
          reasons, and ecological advantages.
        </p>
        <h3>Why ChicagoVeg Outreach?</h3>
        <p className="">
          ChicagoVeg Outreach will provide the opportunity for members to turn
          their knowledge and compassion into actively educating the public.
        </p>

        <h3>
            3 factors that make ChicagoVeg Outreach different:
        </h3>
        <ul className="">
          <li>
            ChicagoVeg supports a non-judgmental environment where everybody is
            welcome to join in the outreach meetups regardless of their diet,
            lifestyle, or philosophy.
          </li>
          <li>
            The focus of the outreach meetups will be on what we support, not
            what we are against.
          </li>
          <li>
            Our outreach meetups will be focused on delivering our message and
            having an additional social/fun time for the participants. This
            group is perfect for vegans, vegetarians, animal, health and
            environmental activists; or anyone who supports them to make the
            difference around us and in the world! "Think globally - Act
            locally!"
          </li>
        </ul>

        <p className="">
          Please watch for our upcoming events to participate in raising
          consciousness in our community:{" "}
          <a href="http://www.Meetup.com/ChicagoVegOutreach" target="_blank" rel="noreferrer">
            Meetup.com/ChicagoVegOutreach
          </a>
          . For any questions, suggestions, or if you would like to help
          organize ChicagoVeg Outreach events, please contact the group
          <a href="contact.html">Organizers</a>.
        </p>
        <p className="">~ BE THE CHANGE! ~</p>
      </article>
    </section>
  </Layout>
);

export default OutreachPage;
