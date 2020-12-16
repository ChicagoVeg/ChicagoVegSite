import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

const NewsPage = () => (
  <Layout>
    <SEO title="News" />
    <section>
      <article className="page">
        <h2>News</h2>
        <img className="text-wrap-image page-main-image" src={require('../images/news.jpg')} alt="news" />
        <h3>ChicagoVeg Meetup News and New Members:</h3>
      </article>
    </section>
  </Layout>
);

export default NewsPage;
