import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

PostFilterForm.propTypes = {
   onsubmit: PropTypes.func,
};

PostFilterForm.defaultProps = {
   onsubmit: null,
};

function PostFilterForm(props) {
   const { onSubmit } = props;
   const [searchTerm, setSearchTerm] = useState('');
   const typingTimeout = useRef(null);

   function handleOnChange(e) {
      const valueInput = e.target.value;
      //console.log('value input nef' + valueInput);
      setSearchTerm(valueInput);

      if (typingTimeout.current) {
         clearTimeout(typingTimeout.current);
      }

      typingTimeout.current = setTimeout(() => {
         const formValues = { searchTerm: valueInput };

         if (onSubmit) {
            onSubmit(formValues);
         }
      }, 300);
   }

   return (
      <div>
         <form>
            <input type="text" value={searchTerm} onChange={handleOnChange} />
         </form>
      </div>
   );
}

export default PostFilterForm;
