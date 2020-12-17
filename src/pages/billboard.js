import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import DonateBox from './donatebox';

const BillboardPage = () => (
  <Layout>
    <SEO title="Billboard" />
    <section>
      <article className="page">
        <h2>Billboard</h2>
        <img
          className="text-wrap-image page-main-image"
          src={require('../images/MIWhyLoveButEatBillboard.jpg')}
          alt="change billboard"
        />
        <div>
          <p className="">
            The purpose of our billboard project is to publicly promote a plant-based diet.
          </p>
          <p className="">
            The billboard will encourage THOUSANDS of people to daily question their traditional
            eating habits
            {' '}
          </p>
          <div className="">
            There are many ways you can make the difference:
            <ul>
              <li>
                <span className="bold">By donating:</span>
                {' '}
                Regardless if it&rsquo;s just $1 or $1000, any
                amount will bring us closer to our goal of $6,000.
                {' '}
                <a
                  href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=XK5P8E398HCH6"
                  target="_blank"
                  rel="noreferrer"
                >
                  Please hit the Donate button below to make your donation
                </a>
                .
              </li>
              <li>
                <span className="bold">By offering your ideas:</span>
                {' '}
                <a
                  href="https://surveynuts.com/surveys/take?id=175162&c=4217900977VVFH"
                  target="_blank"
                  rel="noreferrer"
                >
                  Click here to take this survey
                </a>
              </li>
              <li>
                <span className="bold">By sharing this page on social media:</span>
                {' '}
                Facebook,
                Twitter, Instagram, or any other ways to spread the word!
              </li>
              <li>
                <span className="bold"> By your time/effort:</span>
                {' '}
                Join our volunteering meeting at
                {' '}
                <a href="http://www.ChicagoVeg.org" target="_blank" rel="noreferrer">
                  www.ChicagoVeg.org
                </a>
              </li>
            </ul>
          </div>
          <p>The more ways you can help, the sooner we can make it happen!</p>
          <DonateBox />
          <p>
            ChicagoVeg is a registered 501c3 non-profit organization - Your donation can be tax
            deductible.
          </p>

          <p className="bold">BE THE CHANGE!</p>
          <div>
            <span>This is a sample billboard image only</span>
          </div>
        </div>
      </article>
    </section>
  </Layout>
);

export default BillboardPage;
