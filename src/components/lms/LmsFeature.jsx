import React from 'react';

export function LmsFeature({ content }) {
  return (
    <div className='soft-area pos-relative pb-115'>
      <div className='shape-slider'>
        <span className='shape shape-circle shape-c5-1 ' />
        <span className='shape shape-circle shape-c5-2 ' />
        <span className='shape shape-circle shape-c5-3 ' />
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-xl-8 offset-xl-2'>
            <div className='section-title-2 text-center mb-70'>
              <h2 className='mb-20'>{content.title}</h2>
              <p>{content.subtitle}</p>
            </div>
          </div>
        </div>
        <div className='row'>
          {content.Features.map((feature) => (
            <div className='col-lg-4 col-md-6' key={feature.id}>
              <div className='soft-fea-list text-center mb-30'>
                <div className='soft-fea-list-img mb-35'>
                  <img src={feature.image.url} alt={feature.image.name} />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
