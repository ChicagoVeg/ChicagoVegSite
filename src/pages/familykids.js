import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from './layout';
import SEO from './seo';

const FamilyKidsPage = () => (
  <Layout>
    <SEO title="ChicagoVeg Families &amp; Kids" />
    <section>
      <article className="page">
        <h2>ChicagoVeg Families &amp; Kids</h2>
        <StaticImage className="text-wrap-image page-main-image" src="../images/familykids.jpg" alt="family and kids" />
        <p className="">
          Our community supports vegetarian and vegan families with kids. We
          also welcome non-veg families who are interested in the veg lifestyle.
          We strive to create a growing network of families who live in Chicago
          and the suburbs. Here we will build friendships, share advice and
          support our families&#39;` journeys! As parents, we want to guide our
          children to eat nourishing foods, act compassionately towards others,
          and/or be thoughtful about the Earth. ChicagoVeg Kids is where veg
          kids are the norm, not the exception.
        </p>
        <p className="">
          Please join us if you live in Chicago or the suburbs!
        </p>
      </article>
    </section>
  </Layout>
);

export default FamilyKidsPage;
