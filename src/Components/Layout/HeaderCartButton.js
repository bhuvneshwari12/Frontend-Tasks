import { useContext } from "react";
import CartIcon from "../Card/CartoonIcon"
import classes from './HeaderCartButton.module.css';
import CartContext from "../Store/CartContext";


const HeaderCartButton = (props) => {
  const ctx=useContext(CartContext)
  return (
    <div>
        <button className={classes.button}  onClick={props.cartShowHandler}> 
            <span className={classes.icon}>
                <CartIcon/>
            </span>
            <span style={{color:'black', fontWeight:'bolder'}}>Your Cart</span>
            <span className={classes.badge}>{ctx.totalQuantity}</span>
        </button>
    </div>
  )
}
export default HeaderCartButton;

