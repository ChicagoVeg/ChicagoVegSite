import React from 'react';

const FacebookLink = () => (
  <div className="center">
    <p className="text-center sponsor-text">Like Us On Facebook!</p>
    <div id="fb-root" />
    <script
      async
      defer
      crossOrigin="anonymous"
      src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v9.0&appId=709601619476867&autoLogAppEvents=1"
      nonce="heOqPjUN"
    />

    <div
      className="fb-page"
      data-href="https://www.facebook.com/chicagoveg"
      data-tabs="timeline"
      data-width="500"
      data-height="500"
      data-small-header="true"
      data-adapt-container-width="true"
      data-hide-cover="false"
      data-show-facepile="false"
    >
      <blockquote
        cite="https://www.facebook.com/chicagoveg"
        className="fb-xfbml-parse-ignore"
      >
        <a href="https://www.facebook.com/chicagoveg">
          <p className="text-center">
            ChicagoVeg - Chicagoland Vegetarian, Vegan, and Raw Foodist
            Community
          </p>
        </a>
      </blockquote>
    </div>
  </div>
);

export default FacebookLink;
