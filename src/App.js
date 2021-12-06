import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Login } from './pages/login';
import { SignUp } from './pages/signUp';
import { Map } from './pages/map';
import { ResetPassword } from './pages/reset';
import { Aislesearch } from './pages/aislesearch';
import { Product } from './pages/map/product';
import { Category } from './pages/map/category';
import { StoreInfo } from './pages/storeInfo';
import { Billing } from './pages/billing';
import { Orders } from './pages/orders';
import { Landing } from './pages/landing';
import './styles/sass/index.scss';
import { MyCart } from './pages/cart/index.js';
import { CheckOut } from './pages/checkout';
import { OrderDetail } from './pages/orderDetail';
import { WishList } from './pages/wishlist';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/map" component={Map} />
        <Route exact path="/products" component={Product} />
        <Route exact path="/products/:id" component={Category} />

        <Route exact path="/reset" component={ResetPassword} />
        <Route exact path="/aislesearch" component={Aislesearch} />
        <Route exact path="/storeInfo" component={StoreInfo} />
        <Route exact path="/billing" component={Billing} />
        <Route exact path="/orders" component={Orders} />
        <Route exact path="/orders/:id" component={OrderDetail} />

        <Route exact path="/cart" component={MyCart} />
        <Route exact path="/checkout" component={CheckOut} />
        <Route exact path="/wishlist" component={WishList} />

      </Switch>
    </BrowserRouter>
  );
}

export default App;
