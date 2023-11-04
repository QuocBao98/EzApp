import React from 'react';
import PropTypes from 'prop-types';

Pagination.propTypes = {
   pagination: PropTypes.object.isRequired,
   OnPageChange: PropTypes.func,
};

function Pagination(props) {
   const { pagination, OnPageChange } = props;
   const { _page, _limit, _totalRows } = pagination;
   const totalPage = _totalRows / _limit;

   function handleOnPageChange(page) {
      if (OnPageChange) {
         OnPageChange(page);
      }
   }

   return (
      <div>
         <button
            disabled={_page <= 1}
            onClick={() => {
               handleOnPageChange(_page - 1);
            }}
         >
            Prev
         </button>
         <button
            disabled={_page >= totalPage}
            onClick={() => {
               handleOnPageChange(_page + 1);
            }}
         >
            Next
         </button>
      </div>
   );
}

export default Pagination;
