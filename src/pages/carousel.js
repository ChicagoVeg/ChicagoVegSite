import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

// tutorial - https://www.positronx.io/react-responsive-carousel-tutorial/
const ResponsiveCarousel = () => (
  <section>
    <article>
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        interval={4000}
        autoPlay
        transitionTime={450}
        labels={false}
      >
        <div>
          <StaticImage src="../images/img1.jpg" alt="Chicago Vegan Mania" className="carousel-image" />
        </div>
        <div>
          <StaticImage src="../images/img2.jpg" alt="Veggie Fest in Lisle" className="carousel-image" />
        </div>
        <div>
          <StaticImage src="../images/img3.jpg" alt="Quesadilla La Reyna Del Sur" className="carousel-image" />
        </div>
        <div>
          <StaticImage src="../images/img4.jpg" alt="Purple Sprouts Cafe" className="carousel-image" />
        </div>
        <div>
          <StaticImage src="../images/img5.jpg" alt="Montrose Beach Potluck &amp; Volleyball" className="carousel-image" />
        </div>
      </Carousel>
    </article>
  </section>
);

export default ResponsiveCarousel;
