import PropTypes from 'prop-types';

import { yupResolver } from '@hookform/resolvers/yup';
import { LockOutlined } from '@mui/icons-material';
import { Avatar, Button, Typography, createTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import InputField from 'Components/form-control/InputField';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

const theme = createTheme({
   spacing: 4,
});

const useStyles = makeStyles({
   root: {
      paddingTop: theme.spacing(4),
   },

   avatar: {
      margin: '0 auto 15px',
      backgroundColor: 'rgb(156, 39, 176)',
   },

   title: {
      textAlign: 'center',
      fontWeight: 'bold',
      margin: theme.spacing(3),
   },

   submit: {
      margin: theme.spacing(3),
   },
});

RegisterForm.propTypes = {
   onSubmit: PropTypes.func,
};

function RegisterForm(props) {
   const classes = useStyles();

   const schema = yup.object().shape({
      title: yup.string().required('Please typing title'),
   });
   const form = useForm({
      defaultValues: {
         fullName: '',
         email: '',
         password: '',
         retypePassword: '',
      },
      resolver: yupResolver(schema),
   });

   const handleFormSubmit = (values) => {
      const { onSubmit } = props;

      if (onSubmit) {
         onSubmit(values);
      }

      form.reset();
   };

   return (
      <div className={classes.root}>
         <Avatar className={classes.avatar}>
            <LockOutlined></LockOutlined>
         </Avatar>

         <Typography component="h3" variant="h5" className={classes.title}>
            Create An Account
         </Typography>

         <form onSubmit={form.handleSubmit(handleFormSubmit)}>
            <InputField name="fullName" label="Full Name" form={form} />
            <InputField name="email" label="Email" form={form} />
            <InputField name="password" label="Password" form={form} />
            <InputField name="retypePassword" label="Retype Password" form={form} />

            <Button fullWidth variant="contained" color="primary" className={classes.submit}>
               Create An Account
            </Button>
         </form>
      </div>
   );
}

export default RegisterForm;
