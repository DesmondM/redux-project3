import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector, useDispatch  } from 'react-redux';
import { cartActions } from './store/shoppingCartSlice';



function App() {
    const dispatch = useDispatch()
    const viewingCart= useSelector(state=>state.cart.viewCart)
  return    (
    <Layout>
     {viewingCart? <Cart />: null}
      <Products />
    </Layout>
  );
}

export default App;
