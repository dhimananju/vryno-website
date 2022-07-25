import React from 'react';

export function LmsWorking({ content }) {
  return (
    <section className='how-work-area pos-relative pt-150 pb-120'>
      <div className='shape-section'>
        <img className='shape shape-s-1 ' src='/img/shape/shape-s-1.png' alt />
        <img className='shape shape-s-2 ' src='/img/shape/shape-s-2.png' alt />
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-xl-6 offset-xl-3'>
            <div className='section-title-4 text-center mb-70'>
              <h2>{content.title}</h2>
              <p>{content.subtitle}</p>
            </div>
          </div>
        </div>
        <div className='row'>
          {content.Steps.map((step) => (
            <div className='col-xl-4 col-lg-4' key={step.id}>
              <div className='how-work how-work-rd mb-30'>
                <div className='how-work-icon'>
                  <img src={step.image.url} alt={step.image.name} />
                </div>
                <div className='how-work-text'>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LmsWorking;
