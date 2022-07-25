import React from 'react';
import NextLink from 'next/link';

export function ContactUsHeader() {
  return (
    <div className='container'>
      <div className='row align-items-center'>
        <div className='col-lg-6'>
          <div className='page-title mb-30'>
            <h3>Contact Us</h3>
            {/* <p>Go fifth signs dry light sea created greater</p> */}
          </div>
        </div>
        <div className='col-lg-6'>
          <div className='breadcrumb-list text-left text-lg-right mb-30'>
            <ul>
              <li>
                <NextLink href='/' passHref>
                  <a>Home</a>
                </NextLink>
              </li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUsHeader;
