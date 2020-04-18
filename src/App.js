import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import { compose, createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./store/reducers";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Error from "./components/Error";
import MyToast from "./components/MyToast";
import Oferta from "./pages/Oferta";
import Delivery from "./pages/Delivery";

import "./fakebackend/axiosData";

const App = () => {
  const initialState = {};

  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(thunk),
      (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()) ||
        compose
    )
  );

  return (
    <Router>
      <Provider store={store}>
        <Header />
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route path="/home" exact component={Home} />
          <Route path="/products" exact component={Products} />
          <Route path="/product-details/:id" exact component={ProductDetails} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/error" exact component={Error} />
          <Route path="/oferta" exact component={Oferta} />
          <Route path="/delivery" exact component={Delivery} />
        </Switch>
        <Footer />
        <MyToast />
      </Provider>
    </Router>
  );
};

export default App;
