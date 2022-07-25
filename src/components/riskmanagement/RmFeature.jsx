import React from 'react';

export function RmFeature({ content }) {
  return (
    <div className='benifit-area benifit-area-service pos-relative fix'>
      <div className='shape-slider'>
        <img
          className='shape shape-1 shape-5-1 '
          src='img/shape/shape-sq.png'
          alt
        />
        <img className='shape shape-2  ' src='/img/shape/shape2.png' alt />
        <img className='shape shape-3 ' src='/img/shape/shape3.png' alt />
        <img className='shape shape-4 ' src='/img/shape/shape4.png' alt />
        <img className='shape shape-5 ' src='/img/shape/shape5.png' alt />
        <img className='shape shape-6 ' src='/img/shape/shape6.png' alt />
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-xl-8 offset-xl-2'>
            <div className='section-title-4 text-center mb-70'>
              <h2 className='mb-20'>{content.title}</h2>
              <p>{content.subtitle}</p>
            </div>
          </div>
        </div>
        {content.Features.map((feature) => (
          <div className='row align-items-center mb-120'>
            {feature.layoutRm === 'left' && (
              <div className='col-xl-5 col-lg-6 offset-xl-1'>
                <div
                  className={`benifit-img mb-30 wow fadeInLeft animated`}
                  data-wow-duration='1.5s'
                  data-wow-delay='.5s'
                >
                  <img src={feature.image.url} alt />
                </div>
              </div>
            )}
            <div className='col-xl-5 col-lg-6 offset-xl-1'>
              <div className='single-benifit mb-30'>
                <img src={feature.iconRm.url} alt={feature.iconRm.name} />
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </div>
            {feature.layoutRm === 'right' && (
              <div className='col-xl-5 col-lg-6 offset-xl-1'>
                <div
                  className={`benifit-img mb-30 wow fadeInRight animated`}
                  data-wow-duration='1.5s'
                  data-wow-delay='.5s'
                >
                  <img src={feature.image.url} alt />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
