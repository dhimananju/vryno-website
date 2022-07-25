import React from 'react';

export function Socials({ content }) {
  return (
    <div className='widget mb-50'>
      <div className='widget-title-box mb-40'>
        <span className='animate-border' />
        <h3 className='widget-title'>Social Profile</h3>
      </div>
      <div className='social-profile'>
        <a href={content.facebook}>
          <i className='fab fa-facebook-f' />
        </a>
        <a href={content.instagram}>
          <i className='fab fa-instagram' />
        </a>
        <a href={content.linkedin}>
          <i className='fab fa-linkedin-in' />
        </a>
      </div>
    </div>
  );
}
