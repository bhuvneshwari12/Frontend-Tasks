import CartIcon from "../Card/CartoonIcon"
import classes from './HeaderCartButton.module.css';


const HeaderCartButton = (props) => {
  return (
    <div>
        <button className={classes.button}  onClick={props.cartShowHandler}> 
            <span className={classes.icon}>
                <CartIcon/>
            </span>
            <span >Your Cart</span>
            <span className={classes.badge}>3</span>
        </button>
    </div>
  )
}
export default HeaderCartButton;

