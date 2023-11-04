import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';
import { Controller } from 'react-hook-form';

InputField.propTypes = {
   form: PropTypes.object.isRequired,
   name: PropTypes.string.isRequired,
   label: PropTypes.string,
   disable: PropTypes.bool,
};

function InputField(props) {
   const { form, name, label, disable } = props;
   const { errors, formState } = form;
   const hasError = errors[name] && formState.touched[name];
   console.log('hasError' + hasError);
   console.log(errors[name], formState.touched[name]);

   return (
      <Controller
         name={name}
         control={form.control}
         as={TextField}
         margin="normal"
         fullWidth
         label={label}
         disabled={disable}
         error={!!hasError}
         helperText={errors[name]?.message}
      />
   );
}

export default InputField;
