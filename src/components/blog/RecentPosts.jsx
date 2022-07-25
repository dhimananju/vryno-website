import React from 'react';
import NextLink from 'next/link';

export function RecentPosts({ content }) {
  return (
    <div className='widget mb-50'>
      <div className='widget-title-box mb-40'>
        <span className='animate-border' />
        <h3 className='widget-title'>Recent Posts</h3>
      </div>
      <ul className='recent-posts'>
        {content.map((blog) => (
          <li key={blog.id}>
            <div className='widget-posts-image'>
              <NextLink href={`/blogs/${blog.slug}`} passHref>
                <a>
                  <img
                    src={blog.thumbnail.url}
                    alt={blog.thumbnail.name}
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                  />
                </a>
              </NextLink>
            </div>
            <div className='widget-posts-body'>
              <div className='widget-posts-meta'>{blog.created_at}</div>
              <h6 className='widget-posts-title'>
                <NextLink href={`/blogs/${blog.slug}`} passHref>
                  <a>{blog.title}</a>
                </NextLink>
              </h6>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
