import React from 'react';

export function CrmCta({ content }) {
  return (
    <div className='xn-about-area pt-110 fix'>
      <div className='container'>
        <div className='row'>
          <div className='col-xl-6 col-lg-6'>
            <div
              className='xn-about-img mb-30 wow fadeInLeft animated'
              data-wow-duration='1.5s'
              data-wow-delay='.5s'
            >
              <img alt={content.image.name} src={`${content.image.url}`} />
            </div>
          </div>
          <div className='col-xl-5 col-lg-5 offset-lg-1'>
            <div className='xn-about-content mb-30 pt-40'>
              <h2>{content.title}</h2>
              <p>{content.subtitle}</p>
              <ul>
                {content.GuideDescription.split(',').map((bullets) => (
                  <li key={bullets}>
                    <i className='ti-check-box' /> <span>{bullets}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
