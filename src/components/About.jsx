import React from 'react';

export function About({ content }) {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-xl-5 col-lg-6 '>
          <div
            // style={{ marginLeft: '-90px' }}
            className=' mb-30 wow fadeInLeft animated'
            data-wow-duration='1.5s'
            data-wow-delay='.5s'
          >
            <img
              className='img-fluid'
              src={`${content.image.url}`}
              alt={content.image.name}
            />
          </div>
        </div>
        <div className='col-xl-6 col-lg-6 offset-xl-1'>
          <div className='fea-3-content mb-30 pt-150'>
            <span>about us</span>
            <h2>{content.title}</h2>
            <p>{content.description}</p>
            <div className='mb-10' />
            <div data-aos='fade-up'>
              <a href='#' className=''>
                <span>Read more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
