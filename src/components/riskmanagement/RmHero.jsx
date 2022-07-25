import React from 'react';
import NextLink from 'next/link';

export function RmHero({ content }) {
  return (
    <section className='slider-area fix'>
      <div className='shape-slider'>
        <span className='shape shape-circle shape-c5-1 ' />
        <span className='shape shape-circle shape-c6-2 ' />
        <span className='shape shape-circle shape-c5-3 shape-c6-3 ' />
      </div>
      <img
        className='img-shape main-image-shape wow fadeInRight animated'
        src='img/slider/circle.png'
        alt
        data-wow-duration='2s'
        data-wow-delay='2s'
      />
      <div className='single-slider slider-height-1 d-flex align-items-center pt-50'>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-6 col-lg-6'>
              <div className='slider-text slider-text-3 pt-60'>
                <h2 className='wow fadeInUp animated' data-wow-delay='0.4s'>
                  {content.title}
                </h2>
                <p className='wow fadeInUp animated' data-wow-delay='0.9s'>
                  {content.description}
                </p>
                <div
                  className='slider-btn wow fadeInUp animated'
                  data-wow-delay='1.3s'
                >
                  <NextLink href={content.demoLink} passHref>
                    <a className='x-btn btn-squ btn-red'>
                      <span>{content.primaryCTA}</span>
                    </a>
                  </NextLink>
                  <div className='sl-video  d-inline'>
                    <span>{content.secondaryCTA}</span>{' '}
                    <a
                      className='popup-video'
                      href={content.videoLink}
                      target='_blank'
                    >
                      <i className='far fa-play' />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xl-6 col-lg-6'>
              <div
                className='slider-img slider-img-6 wow fadeInRight animated'
                data-wow-duration='2.5s'
                data-wow-delay='3.5s'
              >
                <img src={content.image.url} alt={content.image.name} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RmHero;
