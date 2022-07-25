import React from 'react';

export function CrmHero({ content }) {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-xl-6 col-lg-6'>
          <div className='xn-about-content xn-about-5 mb-30 pt-70 pr-40'>
            <span className='d-block mb-15'>{content.subtitle}</span>
            <h2>{content.title}</h2>
            <p>{content.description}</p>

            <div className='mb-30' />
            <a
              href='#'
              className='btn btn-border btn-orange'
              data-aos='fade-up'
            >
              {content.CTA}
            </a>
          </div>
        </div>
        <div className='col-xl-6 col-lg-6'>
          <div
            className='xn-about-img-2-right mb-30 wow fadeInRight animated'
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
