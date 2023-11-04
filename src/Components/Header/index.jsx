import CodeIcon from '@mui/icons-material/Code';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import { Link, NavLink } from 'react-router-dom';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Register from 'features/Auth/Component/Register/Register';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
   link: {
      textDecoration: 'none',
      color: 'white',
   },
}));

export default function Header() {
   const classes = useStyles();

   const [open, setOpen] = useState(false);

   const handleClickOpen = () => {
      setOpen(true);
   };

   const handleClose = () => {
      setOpen(false);
   };

   return (
      <Box sx={{ flexGrow: 1 }}>
         <AppBar position="static">
            <Toolbar>
               <CodeIcon sx={{ mr: 2 }} />

               <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  <Link className={classes.link} to="/">
                     Bảo Bảo Shop
                  </Link>
               </Typography>

               <NavLink className={classes.link} to="/todo">
                  <Button color="inherit">Todos</Button>
               </NavLink>

               <NavLink className={classes.link} to="/album">
                  <Button color="inherit">Albums</Button>
               </NavLink>

               <Button color="inherit" onClick={handleClickOpen}>
                  Đăng ký
               </Button>
            </Toolbar>
         </AppBar>

         <Dialog open={open} onClose={handleClose} disableEscapeKeyDown>
            <DialogContent>
               <Register />
            </DialogContent>
            <DialogActions>
               <Button onClick={handleClose}>Cancel</Button>
            </DialogActions>
         </Dialog>
      </Box>
   );
}
