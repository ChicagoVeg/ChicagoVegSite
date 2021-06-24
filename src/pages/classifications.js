import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from './layout';
import SEO from './seo';

const ClassificationsPage = () => (
  <Layout>
    <SEO title="Classifications" />
    <section>
      <article className="page">
        <h2>Classifications</h2>
        <StaticImage className="text-wrap-image page-main-image" src="../images/classification.jpeg" alt="classification" />
        <p>
          A Vegetarian is someone who follows a plant-based diet. There are five
          general types of vegetarians:
          <br />
          <br />
          1.
          {' '}
          <span className="bold">Semi-Vegetarians (Flexitarians)</span>
          <br />
          Flexitarians limit their intake of either certain types of meat or the
          amount of meat. Many vegetarians would argue that Flexitarians are not
          Vegetarians at all.
          <br />
          <br />
          2.
          {' '}
          <span className="bold">Ovo-Lacto Vegetarians (Vegetarians)</span>
          <br />
          Ovo-lacto vegetarians do not eat any meat (animals, poultry, fish, sea
          food) but do eat eggs and dairy products.
          <br />
          <br />
          Subcategories:
          <br />
          - Ovo vegetarians eat eggs but not dairy
          <br />
          - Lacto vegetarians eat dairy but not eggs (This is the most
          common type of Vegetarians)
          <br />
          <br />
          3.
          {' '}
          <span className="bold">"Strict" Vegetarians (Vegans)</span>
          <br />
          Vegans eat no animal products - no eggs, no dairy, no honey, etc.
          <br />
          <br />
          4.
          {' '}
          <span className="bold">
            Raw Food Vegetarians (Raw/Living Foodists)
          </span>
          <br />
          Raw or Living Foodists eat only raw vegan food, because enzymes are
          destroyed by normal cooking processes.
          <br />
          <br />
          5.
          {' '}
          <span className="bold">Fruitarians</span>
          <br />
          Fruitarians eat only fruit, fruit-like vegetables (e.g., tomatoes,
          cucumbers), and sometimes seeds and nuts.
        </p>
      </article>
    </section>
  </Layout>
);

export default ClassificationsPage;
