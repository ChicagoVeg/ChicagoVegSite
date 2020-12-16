import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import "../styles/styles.scss";

const Header = ({ siteTitle }) => {
  const menuItems = [
    {
      title: "Home",
      link: "/",
      isActive: true,
      children: null,
    },
    {
      title: "About us",
      link: "/aboutus/",
      children: [
        {
          title: "News",
          link: "/news/",
          children: null,
        },
        {
          title: "History",
          link: "/history/",
          children: null,
        },
        {
          title: "Mission",
          link: "/mission/",
          children: null,
        },
        {
          title: "Donate",
          link: "/donate/",
          children: null,
        },
        {
          title: "Join us",
          link: "https://www.meetup.com/ChicagoVeg/join",
          children: null,
        },
        {
          title: "Sponsor Us",
          link: "/sponsorus/",
          children: null,
        },
      ],
    },
    {
      title: "Programs",
      link: "/programs/",
      children: [
        {
          title: "Outreach",
          link: "/outreach/",
          children: null,
        },
        {
          title: "Cooking",
          link: "/cooking/",
          children: null,
        },
        {
          title: "Singles",
          link: "/singles/",
          children: null,
        },
        {
          title: "Kids",
          link: "/familykids/",
          children: null,
        },
        {
          title: "Billboard",
          link: "/billboard/",
          children: null,
        },
      ],
    },
    {
      title: "Meetup",
      link: "http://www.meetup.com/ChicagoVeg/",
      target: "_blank",
      children: null,
    },
    {
      title: "Resources",
      link: "/resources/",
      children: [
        {
          title: "Classifications",
          link: "/classifications/",
          children: null,
        },
        {
          title: "Why Veg",
          link: "/whyveg/",
          children: null,
        },
      ],
    },
    {
      title: "Restaurants",
      link: "http://restaurants.chicagoveg.com",
      target: "_blank",
      children: [
        {
          title: "Restaurant Finder",
          link: "http://restaurants.chicagoveg.com",
          target: "_blank",
          children: null,
        },
        {
          title: "ChicagoVeg Choice",
          link: 'http://www.meetup.com/ChicagoVeg/pages/ChicagoVeg_Choice/',
          target: "_blank",
          children: null,
        },
      ],
    },
    {
      title: "Contact Us",
      link: "/contact/",
      children: null,
    },
  ];

  const topNav = useRef();

  const setActive = (e, activate=false) => {
    const target = e.target;

    if (!target) {
      return;
    }

    target.classList[activate ? 'add' : 'remove']('active')
  }
  

  const menu = menuItems.map((item) => {
    return item.children && item.children.length > 0 ? (
      <div className="dropdown" role="button" onMouseEnter={(e) => setActive(e, true)} onMouseLeave={(e) => setActive(e, false)}>
        <Link to={item.link}>{item.title}</Link>
        <button className="dropbtn pointer">
          <FontAwesomeIcon icon={faCaretDown} size="1x" />
        </button>
        <div className="dropdown-content">
          {item.children.map((subItem) => (
            <Link to={subItem.link}>{subItem.title}</Link>
          ))}
        </div>
      </div>
    ) : (
      <Link to={item.link}  onMouseEnter={(e) => setActive(e, true)} onMouseLeave={(e) => setActive(e, false)}>
        {item.title}
      </Link>
    );
  });

  const hamburgerMenuController = () => {
    if (topNav.current.className === "topnav") {
      topNav.current.className += " responsive";
    } else {
      topNav.current.className = "topnav";
    }
  };

  return (
    <header>
      <nav>
        <div className="topnav" id="myTopnav" ref={topNav}>
          <Link to="/" className="chicagoveg-logo">
            <img src={require("../images/logo.png")} alt="brand" />
          </Link>
          {menu}
          <a
            href="!#"
            style={{ fontSize: "15px" }}
            className="icon"
            onClick={hamburgerMenuController}
          >
            &#9776;
          </a>
        </div>
      </nav>
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
