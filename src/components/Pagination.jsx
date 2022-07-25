import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import { BlogShowCase } from '../components/blog/BlogShowCase.jsx';
import { useRouter } from 'next/router';

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => <BlogShowCase content={item} />)}
    </>
  );
}

export function PaginatedItems({ itemsPerPage, items = [] }) {
  const router = useRouter();
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    router.query.page = event.selected + 1;
    router.push(router);
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel='...'
        onPageChange={handlePageClick}
        containerClassName='cpagination'
        activeClassName='cactive'
        hrefAllControls
        hrefBuilder={(page, pageCount, selected) =>
          page >= 1 && page <= pageCount ? `?page=${page}` : '#'
        }
        pageRangeDisplayed={5}
        pageCount={pageCount}
        initialPage={router.query.page ? router.query.page - 1 : 0}
        previousLabel='<'
        nextLabel='>'
        renderOnZeroPageCount={null}
      />
    </>
  );
}
