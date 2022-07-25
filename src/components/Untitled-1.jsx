const NavItemWithoutDropDown = (nav) => {
  return (
    <li className='nav-item'>
      <NextLink href={nav.link} passHref>
        <a className='nav-link active' aria-current='page'>
          {nav.title}
        </a>
      </NextLink>
    </li>
  );
};

const NavItemWithDropDown = (nav) => {
  return (
    <li className='nav-item dropdown'>
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
          <li>
            <NextLink href={nav.link} passHref>
              <a className='dropdown-item'>{nav.title}</a>
            </NextLink>
          </li>
        ))}
      </ul>
    </li>
  );
};
