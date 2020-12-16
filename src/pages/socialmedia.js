import React from "react";

const SocialMedia = () => {
  const openSocialMedia = (e) => {
    const target = e.currentTarget;

    const url = target.dataset.url;
    const top = "500";
    const left = "500";
    const width = "400";
    const height = "400";
    const chicagoVegSite = 'http://www.chicagoveg.com';                      

    window.open(
        `${url}${chicagoVegSite},  _blank, toolbar=no, scrollbars=yes, resizable=yes, top= ${top}, left=${left}, width=${width}, height=${height}`
    );
  };

  return (
    <section>
      <article className="text-center">
        <ul className="list-inline">
          <li>
            <button
              className="button-styled-like-link"
              href="!#"
              data-url="http://twitter.com/share?text=Check out ChicagoVeg- ;url="
              onClick={openSocialMedia}
            >
              <img src={require("../images/twitter.png")} alt="Twitter" />
            </button>
          </li>
          <li>
            <a href="./contact.html">
              <img src={require("../images/email.png")} alt="Contact" />
            </a>
          </li>
          <li>
            <a
              href="http://www.meetup.com/ChicagoVeg/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={require("../images/meetup.png")} alt="Meetup" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/ChicagoVeg/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa fa-instagram instagramFooterImage"></i>
            </a>
          </li>
        </ul>
      </article>
    </section>
  );
};

export default SocialMedia;
