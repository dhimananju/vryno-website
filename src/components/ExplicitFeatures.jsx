import React from 'react';

export function ExplicitFeatures({ content }) {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-xl-6 col-lg-6'>
          <div className='fea-3-content pt-150'>
            <span>Features</span>
            <h2>{content.title}</h2>
            <p>{content.description}</p>
            <div data-aos='fade-up'>
              <a href='#' className='btn-grad'>
                <span>Read more</span>
              </a>
            </div>
          </div>
        </div>
        <div className='col-xl-5 col-lg-6 offset-xl-1'>
          <div
            className='fea-3-img-right wow fadeInRight animated'
            data-wow-duration='1.5s'
            data-wow-delay='.5s'
          >
            <img src={`${content.image.url}`} alt={content.image.name} />
          </div>
        </div>
      </div>
    </div>
  );
}
