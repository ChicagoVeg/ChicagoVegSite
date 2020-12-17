import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import DonateBox from './donatebox';

const DonatePage = () => (
  <Layout>
    <SEO title="Donate" />
    <section>
      <article className="page">
        <h2>Donate</h2>
        <div className="donate-area">
          <div className="donate-message">
            Thank you very much for your consideration. Donations are necessary to pay for website
            fees, name tags, signs, renting equipment, promotional materials, etc. If you wish to
            make in-kind donations that could be used as prizes to make our events more exciting or
            have any questions, please send us a
            {' '}
            <a href="contact.html">message</a>
            .
          </div>
          <DonateBox />
        </div>
      </article>
    </section>
  </Layout>
);

export default DonatePage;
