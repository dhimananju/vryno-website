<header id='header-sticky' className='header-normal'>
  <div className='header-area'>
    <div className='container'>
      <div className='position-relative'>
        <div className='row align-items-center'>
          <div className='col-xl-2 col-lg-2'>
            <div className='logo'>
              <NextLink href='/' passHref>
                <a href='/'>
                  <img src={props.logo} alt='Vryno Logo' />{' '}
                </a>
              </NextLink>
            </div>
          </div>
          <div className='col-xl-6 col-lg-6 position-static'>
            <div className='main-menu pink-menu text-center'>
              <nav id='mobile-menu'>
                <ul>
                  {props.nav.map((nav) => {
                    return (
                      <li style={{ cursor: 'pointer' }} key={nav.link}>
                        <NextLink href={nav.link} passHref>
                          <a href={nav.link}>{nav.title}</a>
                        </NextLink>
                        {nav.Submenu.length > 0 && (
                          <ul className='submenu'>
                            {nav.Submenu.map((submenu) => (
                              <li
                                style={{ cursor: 'pointer' }}
                                key={submenu.link}
                              >
                                <NextLink href={submenu.link} passHref>
                                  <a href={submenu.link}>{submenu.title}</a>
                                </NextLink>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>
            <div className='mobile-menu' />
          </div>

          <div className='col-xl-4 col-lg-4 d-none d-lg-block'>
            <div
              className='header-btn text-right'
              style={{ marginLeft: '-40px' }}
            >
              <NextLink href={props.alterNateCta2Link} passHref>
                <a
                  className='x-btn btn-border btn-radius'
                  style={{ marginRight: '5px' }}
                >
                  {props.alterNateCta1}
                </a>
              </NextLink>
              <NextLink href={props.alterNateCta2Link} passHref>
                <a className='x-btn btn-border btn-radius'>
                  {props.alterNateCta2}
                </a>
              </NextLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>;
