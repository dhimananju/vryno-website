import React from 'react';

export function LmsHero({ content }) {
  return (
    <div className='features-3-area features-3-area-top pt-40 pb-100 fix'>
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
                src={content.image.url}
                alt={content.image.name}
              />
            </div>
          </div>
          <div className='col-xl-6 col-lg-6 offset-xl-1'>
            <div className='fea-3-content mb-30 pt-150'>
              <span className='theme-color-sub'>{content.subtitle}</span>
              <h2>{content.title}</h2>
              <p>{content.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
