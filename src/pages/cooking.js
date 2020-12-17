import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

const CookingPage = () => (
  <Layout>
    <SEO title="Cooking" />
    <section>
      <article className="page">
        <h2> ChicagoVeg Cooking </h2>
        <img className="text-wrap-image page-main-image" src={require('../images/cooking.jpg')} alt="cooking" />
        <p className="">
          ChicagoVeg Cooking is all about tasty plant-based food, sharing
          knowledge and cooking experiences between members, educating each
          other about the many benefits of veg*n cooking and how to make it fun,
          and of course about making new like-minded friends!
        </p>

        <p className="">
          While we have a broad scope including Vegetarian, Vegan Cooked, and
          Raw/Living Vegan Food, we will mostly focus on a general whole food
          vegan diet as the source of tasty food and a healthy lifestyle. It has
          been shown by numerous research studies* that an appropriately planned
          vegan diet may prevent and reverse such devastating health problems
          such as Heart Disease, Cancer, and Diabetes, to name a few. What else
          can we wish from our food if not a combination of being tasty,
          healthy, and fun?!
        </p>

        <p className="">
          ChicagoVeg Cooking is an extension of ChicagoVeg – Community for
          Chicagoland Vegetarians, Vegans, Raw Foodists, and their friends. It
          was born as a joint venture between ChicagoVeg and Lincoln Park
          WholeFoods Wellness Club (previous pilot program) to spread and
          popularize the vegan diet in the Chicago area.
        </p>

        <p className="">
          We welcome everyone: vegetarians, vegans, raw foodists, or ANYONE who
          is interested in tasty and healthy plant-based cooking to join us!
        </p>

        <p className="">
          You can find the meetup page at:
          {' '}
          <a href="http://www.meetup.com/ChicagoVegCooking/" target="_blank" rel="noreferrer">
            http://www.meetup.com/ChicagoVegCooking/
          </a>
        </p>

        <p className="">
          *If you haven't already, check out the video "Forks Over Knives" or
          read "The China Study" by T. Colin Campbell, and "Healthy at 100" by
          John Robins
        </p>
      </article>
    </section>
  </Layout>
);

export default CookingPage;
