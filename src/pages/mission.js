import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from './layout';
import SEO from './seo';

const MissionPage = () => (
  <Layout>
    <SEO title="Mission" />
    <section>
      <article className="page">
        <h2>Our Mission</h2>
        <StaticImage className="text-wrap-image page-main-image" src="../images/mission1.jpg" alt="mission" />
        <h3>
          Provide a community for local vegans/vegetarians and educate the
          public about the advantages of a plant-based diet.
        </h3>
        <span className="bold">Objectives</span>
        <ul className="">
          <li>
            Learn together and educate others about Vegetarianism, Veganism, and
            Raw Foodism
          </li>
          <li>
            Provide a community, facilitate support and social interaction for
            local vegetarians, vegans and anyone who is concerned about
            healthier eating, ethically treating animals or sustainability of
            the planet
          </li>
          <li>
            Support and promote initiatives to raise consciousness to bring more
            harmony, peace, and joy in the community
          </li>
        </ul>
      </article>
    </section>
  </Layout>
);

export default MissionPage;
