import { Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from './CounterSlice';

const useStyles = makeStyles({
   root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: '#ffffff',
      height: 48,
      padding: '0 30px',
      margin: '0 5px',
   },
});

function CounterFeature() {
   const classes = useStyles();
   const dispatch = useDispatch();
   const counter = useSelector((state) => state.counter);

   const handelIncreaseClick = () => {
      const action = increase();
      dispatch(action);
   };

   const handleDecreaseClick = () => {
      const action = decrease();
      dispatch(action);
   };

   return (
      <div>
         Counter feature
         <p>Count : {counter}</p>
         <Button className={classes.root} onClick={handelIncreaseClick}>
            increase
         </Button>
         <Button className={classes.root} onClick={handleDecreaseClick}>
            decrease
         </Button>
      </div>
   );
}

export default CounterFeature;
