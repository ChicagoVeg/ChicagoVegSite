import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

const HistoryPage = () => (
  <Layout>
    <SEO title="History" />
    <section>
      <article className="page">
        <h2>History</h2>
        <img className="text-wrap-image page-main-image" src={require('../images/history.jpeg')} alt="history" />
        <p className="">
          ChicagoVeg was founded on June 23, 2009 through the merger of two
          Meetup groups: Chicago Vegans and Chicago Vegetarians (the both groups
          were established in 2006). The idea was to bring together all
          activists, enthusiasts and supporters of plant based diet whether they
          are vegetarians, vegans, raw foodists or just veg-curious regardless
          of their reasons (ethical, environmental, health, spiritual, etc.).
          <br />
          We are truly an all-inclusive and non-judgmental group that happily
          reaches to all allies to fulfill its mission.
          <br />
          In 2011 alone the group offered 44 events to support local
          vegans/vegetarians and promote veganism/vegetarianism in the Chicago
          area.
          <br />
          ChicagoVeg rapidly grew from just a few hundred members' group to the
          largest Chicagoland Vegan &amp; Vegetarian group with over 3,000
          members (check
          {' '}
          <a href="http://chicagoveg.org/" target="_blank" rel="noreferrer">
            www.ChicagoVeg.org
            {' '}
          </a>
          {' '}
          for the current number) and over 4,000 Facebook fans (
          <a href="http://www.Facebook.com/ChicagoVeg" target="_blank" rel="noreferrer">
            www.Facebook.com/ChicagoVeg
          </a>
          ). ChicagoVeg became the largest Vegan &amp; Vegetarian meetup group
          in the Midwest and the third largest group in the world (
          <a href="http://www.vegetarian.meetup.com" target="_blank" rel="noreferrer">
            vegetarian.meetup.com
          </a>
          )!
          <br />
          In addition to having more members,
          {' '}
          <a href="http://chicagoveg.org/" target="_blank" rel="noreferrer">
            www.ChicagoVeg.org
            {' '}
          </a>
          {' '}
          continually offers significantly more events than any of its peer
          groups. During 2012,
          {' '}
          <a href="http://chicagoveg.org/" target="_blank" rel="noreferrer">
            www.ChicagoVeg.org
            {' '}
          </a>
          {' '}
          offered 34 events (not counting events of our satellite groups:
          {' '}
          <a href="http://www.meetup.com/ChicagoVegCooking/" target="_blank" rel="noreferrer">
            ChicagoVeg Cooking
            {' '}
          </a>
          ,
          {' '}
          <a href="http://www.meetup.com/ChicagoVegKids/" target="_blank" rel="noreferrer">
            ChicagoVeg Kids
          </a>
          , and
          {' '}
          <a href="http://www.meetup.com/ChicagoVegOutreach/" target="_blank" rel="noreferrer">
            ChicagoVeg Outreach
          </a>
          )!
          <br />
          We also made history by organizing the very first
          {' '}
          <a href="http://chicago.veggiepride.com">
            {' '}
            Chicago Veggie Pride Parade (CVPP)
            {' '}
          </a>
          . Visit the official CVPP website at
          {' '}
          <a href="http://chicago.veggiepride.com" target="_blank" rel="noreferrer">
            chicago.veggiepride.com
          </a>
          {' '}
          and consider joining the Team to help with organizing the annual CVPP
          (
          <a href="http://www.Meetup.com/ChicagoVeggiePride" target="_blank" rel="noreferrer">
            www.Meetup.com/ChicagoVeggiePride
          </a>
          ). It's both a lot of fun and work that translates to promoting veg*n
          lifestyle.
          <br />
          2012 was a landmark year as ChicagoVeg finally broke off from being
          just a Meetup group by taking the giant leap and becoming an official
          not-for-profit organization in order to more effectively carry out its
          mission to support the local veg community and promote a plant-based
          diet.
          <br />
          ChicagoVeg is an official 501c3 non-profit organization. ChicagoVeg
          EIN: 46-1670886.
        </p>
      </article>
    </section>
  </Layout>
);

export default HistoryPage;
