import React from 'react';

export function BlogHeader({ bgImage }) {
  return (
    <div
      className='page-title-area pos-relative gray-bg pt-80 pb-80 fix'
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className='page-title-bar-overlay' />
      <div className='shape-slider'>
        <img className='shape shape-2  ' src='/img/shape/shape2.png' alt />
        <img className='shape shape-4 ' src='/img/shape/shape3.png' alt />
        <img className='shape shape-5 ' src='/img/shape/shape-sq.png' alt />
        <img className='shape shape-6 ' src='/img/shape/shape-c-2.png' alt />
      </div>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-lg-6'>
            <div className='page-title title-white-text mb-30'>
              <h3>Blogs</h3>
            </div>
          </div>
          {/* <div className='col-lg-6'>
            <div className='breadcrumb-list list-white text-left text-lg-right mb-30'>
              <ul>
                <li>
                  <a href='#'>Home</a>
                </li>
                <li>Blog Standard</li>
              </ul>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
