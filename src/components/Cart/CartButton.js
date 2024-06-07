import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';
import {cartActions} from '../../store/shoppingCartSlice'

const CartButton = (props) => {
    const dispatch = useDispatch()
    const cartDialog = useSelector(state=>state.cart.viewCart)

    const handleCartDialog=()=>{
        dispatch(cartActions.toggleCart())
    }
  return (
    <button className={classes.button} onClick={handleCartDialog}>
      {cartDialog? <span>My Cart</span>: <span>View Cart</span>}
      {cartDialog&&<span className={classes.badge}>1</span>}
    </button>
  );
};

export default CartButton;
