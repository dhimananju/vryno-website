import React from 'react';
import NextLink from 'next/link';

export function BlogShowCase({ content }) {
  return (
    <article className='postbox post format-image mb-50'>
      <div className='postbox__thumb mb-30'>
        <NextLink href={`/blogs/${content.slug}`} passHref>
          <a>
            <img src={content.thumbnail.url} alt={content.thumbnail.name} />
          </a>
        </NextLink>
      </div>
      <div className='postbox__text'>
        <div className='post-meta mb-15'>
          <span>
            <i className='far fa-calendar-check' /> {content.created_at}
          </span>
          <span>
            <i className='far fa-user' /> {content.author.name}
          </span>
        </div>
        <h3 className='blog-title'>
          <NextLink href={`/blogs/${content.slug}`} passHref>
            <a>{content.title}</a>
          </NextLink>
        </h3>
        <div className='post-text mb-20 text-truncate'>
          <p>{content.description}</p>
        </div>
        <div className='read-more mt-30'>
          <NextLink href={`/blogs/${content.slug}`} passHref>
            <a className='x-btn theme-btn'>read more</a>
          </NextLink>
        </div>
      </div>
    </article>
  );
}
