import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import '../styles/styles.scss';

const Header = ({ siteTitle }) => {
  const menuItems = [
    {
      id: '4640a5ec-e000-4d46-8381-b1b3c7b72916',
      title: 'Home',
      link: '/',
      isActive: true,
      children: null,
    },
    {
      id: 'e6e7f66b-8c4c-4766-b245-c5ab2e830f2b',
      title: 'About us',
      link: '/aboutus/',
      children: [
        {
          id: '58a8b678-2247-4554-816f-d07c8a54840b',
          title: 'News',
          link: '/news/',
          children: null,
        },
        {
          id: '48c98c0f-a25e-4d10-ba25-2e9f7dc6bdec',
          title: 'History',
          link: '/history/',
          children: null,
        },
        {
          id: '3f47fd29-2153-487e-b040-4e331bd3410a',
          title: 'Mission',
          link: '/mission/',
          children: null,
        },
        {
          id: 'bdcff38c-f430-4437-a177-047f882def93',
          title: 'Donate',
          link: '/donate/',
          children: null,
        },
        {
          id: '0d2d32a9-b0db-4cac-b02f-254751353f68',
          title: 'Join us',
          link: 'https://www.meetup.com/ChicagoVeg/join',
          children: null,
        },
        {
          id: '5235ac05-6800-4cae-a071-b517616b8a3f',
          title: 'Sponsor Us',
          link: '/sponsorus/',
          children: null,
        },
      ],
    },
    {
      id: '6a3d255a-42d2-41c4-ac57-33db22bbbdc1',
      title: 'Programs',
      link: '/programs/',
      children: [
        {
          id: 'f4788516-dd58-4236-bfc0-5cab12b3e889',
          title: 'Outreach',
          link: '/outreach/',
          children: null,
        },
        {
          id: 'e4424208-daad-4029-92e8-421bb533e885',
          title: 'Cooking',
          link: '/cooking/',
          children: null,
        },
        {
          id: '03b22861-d35f-4296-8f68-89774da09e1e',
          title: 'Singles',
          link: '/singles/',
          children: null,
        },
        {
          id: '0e6f5412-2b98-41c6-b275-0bb59486f162',
          title: 'Kids',
          link: '/familykids/',
          children: null,
        },
        {
          id: '749958ec-1011-4ce9-9e11-eacf25b158b1',
          title: 'Billboard',
          link: '/billboard/',
          children: null,
        },
      ],
    },
    {
      id: '38bb7d3e-597b-4e05-932e-a5e3fdc5c254',
      title: 'Meetup',
      link: 'http://www.meetup.com/ChicagoVeg/',
      target: '_blank',
      children: null,
    },
    {
      id: 'fb0d44b7-977a-482a-a7ac-4b6cdd8233a5',
      title: 'Resources',
      link: '/resources/',
      children: [
        {
          id: '157e8fcc-3e48-4371-ab97-ce60552251cf',
          title: 'Classifications',
          link: '/classifications/',
          children: null,
        },
        {
          id: '',
          title: 'Why Veg',
          link: '/whyveg/',
          children: null,
        },
      ],
    },
    {
      id: 'b74621f3-359b-467c-ae13-98be2a8561ff',
      title: 'Restaurants',
      link: 'http://restaurants.chicagoveg.com',
      target: '_blank',
      children: [
        {
          id: '83ec31d8-c81a-489e-bf10-24bc9df8103c',
          title: 'Restaurant Finder',
          link: 'http://restaurants.chicagoveg.com',
          target: '_blank',
          children: null,
        },
        {
          id: '7cb2d385-9df8-4f73-83bc-ef2f7cc76b1d',
          title: 'ChicagoVeg Choice',
          link: 'http://www.meetup.com/ChicagoVeg/pages/ChicagoVeg_Choice/',
          target: '_blank',
          children: null,
        },
      ],
    },
    {
      id: 'f6101953-d046-457c-9fed-3749c0dc5762',
      title: 'Contact Us',
      link: '/contact/',
      children: null,
    },
  ];

  const topNav = useRef();

  const setActive = (e, activate = false) => {
    const { target } = e;

    if (!target) {
      return;
    }

    target.classList[activate ? 'add' : 'remove']('active');
  };

  const linkDOM = (link, title, key) => {
    const urlRegex = '^(?!mailto:)(?:(?:http|https|ftp)://)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$';
    const url = new RegExp(urlRegex, 'i');

    return link.length < 2083 && url.test(link)
      ? <a href={link} target="_blank" rel="noreferrer" key={key}>{title}</a>
      : <Link to={link} key={key}>{title}</Link>;
  };

  // based on- https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_responsive_navbar_dropdown
  const menu = menuItems.map((item) => (item.children && item.children.length > 0 ? (
    <div className="dropdown" key={item.id} onMouseEnter={(e) => setActive(e, true)} onMouseLeave={(e) => setActive(e, false)}>
      <button className="dropbtn pointer" role="menu" type="button">
        {linkDOM(item.link, item.title, item.id)}
        <FontAwesomeIcon icon={faCaretDown} size="1x" />
      </button>
      <div className="dropdown-content">
        {item.children.map((subItem) => (
          linkDOM(subItem.link, subItem.title, subItem.id)
        ))}
      </div>
    </div>
  ) : (
    <Link to={item.link} key={`${item.title.replace(/\s/g, '')}Link`} onMouseEnter={(e) => setActive(e, true)} onMouseLeave={(e) => setActive(e, false)}>
      {item.title}
    </Link>
  )));

  const hamburgerMenuController = () => {
    if (topNav.current.className === 'topnav') {
      topNav.current.className += ' responsive';
    } else {
      topNav.current.className = 'topnav';
    }
  };

  return (
    <header>
      <nav>
        <div className="topnav" id="myTopnav" ref={topNav}>
          <Link to="/" className="chicagoveg-logo">
            <img src={require('../images/logo.png')} alt="brand" />
          </Link>
          {menu}
          <a
            href="#!"
            style={{ fontSize: '15px' }}
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
  siteTitle: '',
};

export default Header;
