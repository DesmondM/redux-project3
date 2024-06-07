import classes from './CartItem.module.css';
import { useDispatch,useSelector } from 'react-redux';
import {shoppingItemsActions} from '../../store/shoppingItemsSlice'

const CartItem = (props) => {
   const { title, quantity, total, price } = props.item;
   const dispatch= useDispatch()
const cartItem= useSelector(state=>state.items)

console.log('Cart items', cartItem)

const handleAddItem= ()=>{
    dispatch(shoppingItemsActions.addItem())
}

const handleRemoveItem =()=>{
    dispatch(shoppingItemsActions.removeItem())
}

  return (
    <li className={classes.item}>
      <header>
        <h3>{cartItem.title}</h3>
        <div className={classes.price}>
          ${(cartItem.price * cartItem.quantity).toFixed(2)}{' '}
          <span className={classes.itemprice}>(${cartItem.price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{cartItem.quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={handleRemoveItem}>-</button>
          <button onClick={handleAddItem} >+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
