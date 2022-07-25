import React from 'react';

export function BlogSearch() {
  return (
    <div className='widget mb-50'>
      <form className='search-form'>
        <input type='text' placeholder='Search your keyword...' />
        <button type='submit'>
          <i className='fas fa-search' />
        </button>
      </form>
    </div>
  );
}
