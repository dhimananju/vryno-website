import React from 'react';

export function AboutSection({ content }) {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-xl-5 col-lg-6 '>
          <div
            className='fea-3-img mb-30 wow fadeInLeft animated'
            data-wow-duration='1.5s'
            data-wow-delay='.5s'
          >
            <img src='/img/bg/fea-3.png' alt='icon' />
          </div>
        </div>
        <div className='col-xl-6 col-lg-6 offset-xl-1'>
          <div className='fea-3-content mb-30 pt-150'>
            <span className='theme-color-sub'>{content.title}</span>
            <p>{content.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
