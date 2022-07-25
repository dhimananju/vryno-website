import React from 'react';

export function RmInside({ content }) {
  return (
    <div className='hiw-area pt-150 pb-120 pos-relative'>
      <div className='shape-slider'>
        <img
          className='shape shape-1 shape-5-1 '
          src='img/shape/shape-tr-2.png'
          alt
        />
        <img className='shape shape-5 ' src='img/shape/shape-c-1.png' alt />
      </div>
      <img
        className='img-shape hiw-shape d-none d-lg-block'
        src='img/shape/left-shape.png'
        alt
      />
      <div className='container'>
        <div className='row'>
          <div className='col-xl-6 col-lg-6'>
            <div
              className='hiw-img-left mb-30 wow fadeInLeft animated'
              data-wow-duration='1.5s'
              data-wow-delay='.5s'
            >
              <img src='img/bg/hiw-left.png' alt />
            </div>
          </div>
          <div className='col-xl-6 col-lg-6'>
            <div className='section-title-2 section-title-4 mb-20'>
              <span>{content.subititle}</span>
              <h2>{content.title}</h2>
            </div>
            <div className='hiw-text mb-30'>
              <p>{content.description}</p>
              {content.Items.map((item) => (
                <div className='hiw-list-wrapper mt-40' key={item.id}>
                  <div className='hiw-list fix mb-40'>
                    <div className='hiw-icon f-left'>
                      <img src={item.image.url} alt={item.image.name} />
                    </div>
                    <div className='hiw-list-text fix'>
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
