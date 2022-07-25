import React from 'react';
import NextLink from 'next/link';

export function Team({ content }) {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-xl-8 offset-xl-2'>
          <div className='section-title-pink text-center mb-70'>
            <span>team member</span>
            <h2>{content.title}</h2>
          </div>
        </div>
      </div>
      <div className='row'>
        {content.members.map((member) => (
          <div className='col-xl-3 col-lg-3 col-md-6' key={member.name}>
            <div className='team-wrapper text-center mb-30'>
              <div className='team-img mb-25'>
                <img src={`${member.avatar.url}`} alt={member.name} />
              </div>
              <div className='team-text'>
                <h4>{member.name}</h4>
                <span>{member.position}</span>
                <div className='team-icon'>
                  <NextLink href={member.linkedin} passHref>
                    <a>
                      <i className='ti-linkedin' />
                    </a>
                  </NextLink>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
