import React from 'react';

export function CrmFeatures({ title, features }) {
  return (
    <div className='excellent-feature-area pt-150 fix'>
      <div className='container'>
        <div className='row'>
          <div className='col-xl-8 offset-xl-2'>
            <div className='section-title-2 text-center mb-70'>
              {/* <span className='st-sub'>{content.subtitle}</span> */}
              <h2 className='mb-20 f-600'>{title}</h2>
              <img src='/img/shape/line.png' alt='icon' />
            </div>
          </div>
        </div>
        <div
          className='row'
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          {features.map((feature) => (
            <div className='col-lg-4 col-md-6 ' key={feature.title}>
              <div
                className='ex-fea-list mb-60'
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <div className='ex-fea-img mb-30'>
                  <img src={feature.image.url} alt={feature.image.name} />
                </div>
                <h3 style={{ textAlign: 'center' }}>{feature.title}</h3>
                <p style={{ textAlign: 'center' }}>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
