import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification'; //Notificationfile
import { postCartData ,fetchCartData } from './Store/store';


let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector(state => state.ui.cartIsVisible);
  const notification = useSelector((state) => state.ui.notification);

  const cart = useSelector((state) => state.cart);


  useEffect(() => {
    if (isInitial) {    //false
      isInitial = false; 
      console.log(isInitial ,"FIRST TIME NO DATA POSTED")
      return; 
    }
    console.log("sendCart Data works after FetchCartData")
    dispatch(postCartData(cart));   //data post 
  
  }, [cart,dispatch]);


  useEffect(() => {
    console.log("FECTH IN APP.JS IS RUNNING ")
    dispatch(fetchCartData());
  }, [dispatch]);
  
  //useEffect - mount , unmount , changes 


  return (
    <>
    {notification && (
      <Notification
        status={notification.status}
        title={notification.title}
        message={notification.message}
      />
    )}

    <Layout>
     { showCart && <Cart />}
      <Products />
    </Layout>

    </>
  );
}

export default App;
