import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

const SponsorUsPage = () => (
  <Layout>
    <SEO title="Sponsor us" />
    <section>
      <article className="page">
        <h2>Sponsor Us</h2>
        <img className="text-wrap-image page-main-image" src={require('../images/sponsors.jpg')} alt="sponsor us" />
        <p className="">
          While organizers do our best to provide free/low cost events, there
          are costs to cover the group's maintenance (monthly Meetup.com fees,
          marketing and other expenses add up to a substantial amount). In order
          to keep our events and membership free we're asking our members to
          suggest possible sponsors for our group.
        </p>
        <p className="">
          Our group offers a great opportunity for local businesses that serve
          the local community to increase their visibility without hurting their
          budget. For a little support (that would help cover our monthly and
          other expenses) local businesses would be able to advertise as a proud
          sponsor of our community group and, most importantly, they will have a
          low-cost "targeted" advertisement as we will place the company logo
          and web site in the sponsorship areas of this and our{" "}
          <a href="http://www.meetup.com/ChicagoVeg">meetup website </a> (which
          currently has over 3,500 members).
        </p>
        <p className="">
          On the top of these benefits, there are a number of additional
          opportunities to make the sponsorship even more effective: offering
          perks, discounts, specials, presentations, and more!
        </p>
        <p className="">
          Please <a href="contact.html">contact us </a> for any
          questions/suggestions or sponsorship referrals.
        </p>{" "}
      </article>
    </section>
  </Layout>
);

export default SponsorUsPage;
