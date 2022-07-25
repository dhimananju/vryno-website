import React from 'react';

export function Hero(props) {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-xl-6 col-lg-6'>
          <div className='slider-text slider-text-3'>
            <span
              className='d-block wow fadeInUp animated'
              data-wow-delay='0.2s'
            >
              {props.content.subtitle}
            </span>
            <h2 className='wow fadeInUp animated' data-wow-delay='0.4s'>
              {props.content.title}
            </h2>
            <p className='wow fadeInUp animated' data-wow-delay='0.9s'>
              {props.content.description}
            </p>
            <div
              className='slider-btn wow fadeInUp animated'
              data-wow-delay='1.3s'
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
              }}
            >
              <a
                href={props.content.PrimaryCTALink}
                style={{
                  textTransform: 'uppercase',
                  backgroundColor: '#3B82F6',
                  padding: '15px',
                  borderRadius: '100px',
                  color: 'white',
                }}
                className='btn-pink-moon'
              >
                <span>{props.content.primaryCTA}</span>
              </a>
              <div className='sl-video d-inline'>
                <span>{props.content.secondaryCTA}</span>{' '}
                <a className='popup-video' href={props.content.videoLink}>
                  <i className='far fa-play' />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='col-xl-6 col-lg-6'>
          <div
            className='slider-img slider-img-3 wow fadeInRight animated'
            data-wow-duration='2.5s'
          >
            <img
              src={`${props.content.image.url}`}
              alt={props.content.image.name}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
