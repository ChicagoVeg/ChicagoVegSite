import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { parseString } from 'xml2js';
import { format } from 'date-fns';
import SEO from '../components/seo';
import Layout from '../components/layout';

const NewsPage = () => {
  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    axios
      .get('https://www.meetup.com/ChicagoVeg/events/rss/')
      .then((response) => {
        const xml = response.data;

        parseString(xml, { explicitArray: false }, (error, result) => {
          if (error) {
            console.error(error);
          } else {
            setNewsItems(result.rss.channel.item);
          }
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <Layout>
      <SEO title="News" />
      <section>
        <article className="page">
          <h2>News</h2>
          <h3>ChicagoVeg Meetup News and New Members:</h3>
          {
              newsItems.map((item) => (
                <div>
                  <h3>{item.title}</h3>
                  <p dangerouslySetInnerHTML={{ __html: item.description }} />
                  <p>
                    <a href={item.guid._} target="_blank" rel="noreferrer">Link</a>
                    {' '}
                  </p>
                  <p>
                    <span className="bold">Event Time:</span>
                    {' '}
                    {item.pubDate}
                  </p>
                  <hr />
                </div>
              ))
            }
        </article>
      </section>
    </Layout>
  );
};

export default NewsPage;
