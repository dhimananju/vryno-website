import React from 'react';

export function Pagination() {
  return (
    <div className='basic-pagination basic-pagination-2 mb-40'>
      <ul>
        <li>
          <a href='#'>
            <i className='fas fa-angle-double-left' />
          </a>
        </li>
        <li className='active'>
          <a href='#'>01</a>
        </li>
        <li>
          <a href='#'>02</a>
        </li>
        <li>
          <a href='#'>03</a>
        </li>
        <li>
          <a href='#'>
            <i className='fas fa-ellipsis-h' />
          </a>
        </li>
        <li>
          <a href='#'>
            <i className='fas fa-angle-double-right' />
          </a>
        </li>
      </ul>
    </div>
  );
}
