import React from 'react';
import NextLink from 'next/link';

export function NavBar(props) {
  return (
    <>
      <nav
        className='navbar sticky-top navbar-expand-lg navbar-light bg-light '
        style={{ padding: '20px' }}
      >
        <div className='container'>
          <NextLink href='/' passHref>
            <a className='navbar-brand' style={{ marginRight: '10px' }}>
              <img src={props.logo} alt='Vryno Logo' />
            </a>
          </NextLink>

          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon' />
          </button>

          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              {props.nav.map((nav) => {
                const withDropDown = nav.Submenu.length > 0;
                return withDropDown ? (
                  <NavItemWithDropDown nav={nav} key={nav.title} />
                ) : (
                  <NavItemWithoutDropDown nav={nav} key={nav.title} />
                );
              })}
            </ul>

            <div className='header-btn text-right'>
              <NextLink href={props.alterNateCta1Link} passHref>
                <a
                  className='x-btn btn-border btn-radius'
                  style={{ marginRight: '7px', textDecoration: 'none' }}
                >
                  {props.alterNateCta1}
                </a>
              </NextLink>
              <NextLink href={props.alterNateCta2Link} passHref>
                <a
                  className='x-btn btn-border btn-radius'
                  style={{ textDecoration: 'none' }}
                >
                  {props.alterNateCta2}
                </a>
              </NextLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

const NavItemWithoutDropDown = ({ nav }) => {
  return (
    <li className='nav-item' style={{ marginLeft: '15px' }} key={nav.title}>
      <NextLink href={nav.link} passHref>
        <a className='nav-link' aria-current='page'>
          {nav.title}
        </a>
      </NextLink>
    </li>
  );
};

const NavItemWithDropDown = ({ nav }) => {
  return (
    <li
      className='nav-item dropdown'
      style={{ marginLeft: '15px' }}
      key={nav.title}
    >
      <NextLink href={nav.link} passHref>
        <a
          className='nav-link dropdown-toggle'
          id='navbarDropdown'
          role='button'
          data-bs-toggle='dropdown'
          aria-expanded='false'
        >
          {nav.title}
        </a>
      </NextLink>
      <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
        {nav.Submenu.map((nav) => (
          <li key={nav.title}>
            <NextLink href={nav.link} passHref>
              <a className='dropdown-item'>{nav.title}</a>
            </NextLink>
          </li>
        ))}
      </ul>
    </li>
  );
};
