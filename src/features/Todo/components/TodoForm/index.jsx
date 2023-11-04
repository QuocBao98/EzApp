import React from 'react';
import PropTypes from 'prop-types';

import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import InputField from 'Components/form-control/InputField';
//import InputField from '../../../../Components/form-control/InputField';

TodoForm.propTypes = {
   onSubmit: PropTypes.func,
};

function TodoForm(props) {
   const schema = yup.object().shape({
      title: yup.string().required('Please typing title'),
   });
   const form = useForm({
      defaultValues: {
         title: '',
      },
      resolver: yupResolver(schema),
   });

   const handleFormSubmit = (values) => {
      const { onSubmit } = props;
      console.log('values' + values);
      if (onSubmit) {
         console.log('ondubmit');
         onSubmit(values);
      }

      form.reset();
   };

   return (
      <form onSubmit={form.handleSubmit(handleFormSubmit)}>
         <InputField name="title" label="Todo" form={form} />
      </form>
   );
}

export default TodoForm;
