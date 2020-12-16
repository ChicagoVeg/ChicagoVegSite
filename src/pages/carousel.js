import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const ResponsiveCarousel = () => (
    <section>
      <article>
        <Carousel infiniteLoop>
          <div>
            <img src={require('../images/img1.jpg')} alt="Chicago Vegan Mania" />
            <p className="legend">Chicago Vegan Mania</p>
          </div>
          <div>
            <img src={require('../images/img2.jpg')} alt="Veggie Fest in Lisle" />
            <p className="legend">Veggie Fest in Lisle</p>
          </div>
          <div>
            <img src={require('../images/img3.jpg')} alt="Quesadilla La Reyna Del Sur" />
            <p className="legend">Legend 3</p>
          </div>
          <div>
            <img src={require('../images/img4.jpg')} alt="Purple Sprouts Cafe" />
            <p className="legend">Legend 3</p>
          </div>
          <div>
            <img
              src={require('../images/img5.jpg')}
              alt="Montrose Beach Potluck &amp; Volleyball"
            />
            <p className="legend">Legend 3</p>
          </div>
        </Carousel>
      </article>
    </section>
);

export default ResponsiveCarousel;
