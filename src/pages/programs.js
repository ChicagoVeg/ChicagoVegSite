import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

const ProgramsPage = () => (
  <Layout>
    <SEO title="Programs" />
    <section>
      <article className="page">
        <h2>Programs</h2>
        <img
          className="text-wrap-image page-main-image"
          src={require('../images/programs2.jpeg')}
          alt="Programs"
        />
        <p className="">
          In addition to our general monthly events which are published on
          <a href="http://www.meetup.com/ChicagoVeg/">Meetup.com/ChicagoVeg</a>,
          we also offer separate programs to better accommodate specific
          interests or segments of the community. Different programs normally
          based on separate Meetup groups:
        </p>
        <ul className="">
          <li>
            <a href="http://www.meetup.com/ChicagoVegKids" target="_blank" rel="noreferrer">
              ChicagoVeg Kids
            </a>
          </li>
          <li>
            <a href="http://www.Meetup.com/ChicagoVegCooking" target="_blank" rel="noreferrer">
              ChicagoVeg Cooking
            </a>
          </li>
          <li>
            <a href="http://www.Meetup.com/ChicagoVegOutreach" target="_blank" rel="noreferrer">
              ChicagoVeg Outreach
            </a>
          </li>
          <li>
            <a href="http://www.Meetup.com/ChicagoVeggiePride " target="_blank" rel="noreferrer">
              Chicago Veggie Pride
            </a>
          </li>
        </ul>
        <p className="">
          Please follow the corresponding links for more details about each
          program.
        </p>
      </article>
    </section>
  </Layout>
);

export default ProgramsPage;
