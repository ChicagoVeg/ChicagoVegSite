import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from './layout';
import SEO from './seo';

const ResourcesPage = () => (
  <Layout>
    <SEO title="Resource" />
    <section>
      <article className="page">
        <h2>Resources</h2>
        <div className="">
          <a
            href="http://www.ravediet.com/products.php?cat=12&amp;partner=cvm"
            target="_blank"
            title="Anderson's Eating Video"
            rel="noreferrer"
          >
            <StaticImage className="text-wrap-image page-image" src="../images/Eating3rdEd.jpg" alt="Globe Transformer Video" />
          </a>
          <p className="">
            &quot;Anderson&apos;s Eating DVD is a gift to humanity. This has changed my
            life forever! Do yourself a favor and buy 10 of these for your
            friends and family. You will learn the absolute truth about the
            power of eating the right food. You will know with confidence that
            you are doing the right thing. Learn the secrets to improved health.
            Learn that it&apos;s never too late to start eating right&quot;.
            <br />
            <br />
            <a
              href="http://www.ravediet.com/products.php?cat=12&amp;partner=cvm"
              target="_blank"
              rel="noreferrer"
            >
              Order the DVD for yourself or for your loved ones!
            </a>
          </p>
        </div>
        <h3>Veg-related links:</h3>
        <ul className="">
          <li>
            <a target="new" href="http://www.chicagoveg.org">
              ChicagoVeg
            </a>
          </li>
          <li>
            <a target="new" href="http://www.vegancooking.com/">
              Vegan Cooking
            </a>
          </li>
          <li>
            <a target="new" href="http://www.vegguide.org">
              VegGuide.org
            </a>
          </li>
          <li>
            <a target="new" href="http://www.happycow.net">
              Happy Cow
            </a>
          </li>
          <li>
            <a target="new" href="http://www.greenpeople.org">
              Green People
            </a>
          </li>
          <li>
            <a
              target="new"
              href="https://konikoffdental.com/healthy-vegan-recipes-for-the-family/"
            >
              Healthy Vegan Recipes for the Family
            </a>
          </li>
          <li>
            <a target="new" href="http://worldpeacediet.org">
              World Peace Diet
            </a>
          </li>
          <li>
            <a target="new" href="http://www.circleofcompassion.org">
              Circle of Compassion
            </a>
          </li>
          <li>
            <a target="new" href="http://vegetarian.meetup.com">
              Vegetarian Meetups Worldwide
            </a>
          </li>
          <li>
            <a target="new" href="http://vegan.meetup.com">
              Vegan Meetups Worldwide
            </a>
          </li>
          <li>
            <a target="new" href="http://rawfood.meetup.com">
              Raw Food Meetups Worldwide
            </a>
          </li>
          <li>
            <a target="new" href="http://facebook.com/chicagoveg">
              ChicagoVeg on Facebook
            </a>
          </li>
          <li>
            <a target="new" href="http://twitter.com/chicago_veg">
              ChicagoVeg on Twitter
            </a>
          </li>
          <li>
            <a target="new" href="http://www.fakemeats.com">
              Fake Meats
            </a>
          </li>
          <li>
            <a target="new" href="http://www.myspace.com/chicagoveg">
              Chicagoveg on Myspace
            </a>
          </li>
        </ul>
        {' '}
      </article>
    </section>
  </Layout>
);

export default ResourcesPage;
