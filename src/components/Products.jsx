import React from 'react';
import NextLink from 'next/link';

export function Products({ content }) {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-xl-8 offset-xl-2'>
          <div className='section-title-pink text-center mb-70'>
            <span>{content.subtitle}</span>
            <h2>{content.title}</h2>
          </div>
        </div>
      </div>
      <div className='row fea-pr'>
        {content.features.map((feature) => (
          <div className='col-lg-4 col-md-6' key={feature.title}>
            <div className='feal-list-item text-center mb-30'>
              <div className='fea-list-img'>
                <img src={feature.image.url} alt={feature.image.name} />
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>

              <NextLink href={feature.linkHm} passHref>
                <a>see more details</a>
              </NextLink>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
