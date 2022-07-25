import React from 'react';
import NextLink from 'next/link';

export function Categories({ content }) {
  return (
    <div className='widget mb-50'>
      <div className='widget-title-box mb-40'>
        <span className='animate-border' />
        <h3 className='widget-title'>Categories</h3>
      </div>
      <ul className='cat'>
        {content.map((category) => {
          return (
            <li key={category.slug}>
              <NextLink href={`/blogs/category/${category.slug}`} passHref>
                <a>
                  {category.title}{' '}
                  <span className='f-right'>{category.count.length}</span>
                </a>
              </NextLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
