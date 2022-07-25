import React from 'react';
import NextLink from 'next/link';

export function Footer({ content }) {
  return (
    <footer className='footer-bg'>
      <div className='footer-area pt-120 pb-60'>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-4 col-lg-6 col-md-8'>
              <div className='footer-widget mb-40'>
                <div className='footer-text'>
                  <img src={content.logo.url} alt='Vryno Logo' />

                  <p>{content.description}</p>
                </div>
                <div className='footer-social'>
                  <NextLink href={content.facebook} passHref>
                    <a>
                      <i className='ti-facebook' />
                    </a>
                  </NextLink>
                  <NextLink href={content.youtube} passHref>
                    <a>
                      <i className='ti-youtube' />
                    </a>
                  </NextLink>
                  <NextLink href={content.linkedin} passHref>
                    <a>
                      <i className='ti-linkedin' />
                    </a>
                  </NextLink>
                  <NextLink href={content.instagram} passHref>
                    <a>
                      <i className='ti-instagram' />
                    </a>
                  </NextLink>
                </div>
              </div>
            </div>
            {content.FooterExtras.map((extra) => (
              <div className='col-xl-2 col-lg-3 col-md-4' key={extra.title}>
                <div className='footer-widget mb-40'>
                  <h3>{extra.title}</h3>
                  <ul>
                    <NextLink href={extra.extra1Link} passHref>
                      <li>
                        <a style={{ cursor: 'pointer' }}>{extra.extra1}</a>
                      </li>
                    </NextLink>

                    <NextLink href={extra.extra2Link} passHref>
                      <li>
                        <a style={{ cursor: 'pointer' }}>{extra.extra2}</a>
                      </li>
                    </NextLink>
                    <NextLink href={extra.extra3Link} passHref>
                      <li>
                        <a style={{ cursor: 'pointer' }}>{extra.extra3}</a>
                      </li>
                    </NextLink>
                  </ul>
                </div>
              </div>
            ))}

            {/* end */}
          </div>
        </div>
      </div>

      <div className='copyright-area'>
        <div className='container'>
          <div className='copyright-border'>
            <div className='row'>
              <div className='col-xl-6 col-lg-6 col-md-6'>
                <div className='copyright'>
                  <p>Copyright © 2019 Vryno. All rights reserved</p>
                </div>
              </div>
              {/* <div className='col-xl-6 col-lg-6 col-md-6'>
                <div className='footer-menu text-left text-md-right'>
                  <ul>
                    <NextLink href='#' passHref>
                      <li>
                        <a>About</a>
                      </li>
                    </NextLink>
                    <NextLink href='#' passHref>
                      <li>
                        <a>Tips &amp; Tricks</a>
                      </li>
                    </NextLink>
                    <NextLink href='#' passHref>
                      <li>
                        <a>Service</a>
                      </li>
                    </NextLink>
                  </ul>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
