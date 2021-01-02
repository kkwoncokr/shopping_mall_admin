import React, { useEffect } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import NoticePage from "./pages/NoticePage";
import ProductPage from "./pages/ProductPage";
import PurchasePage from "./pages/PurchasePage";
import RegisterPage from "./pages/RegisterPage";
import SupportPage from "./pages/SupportPage";
import CouponPage from "./pages/CouponPage";
import UserPage from "./pages/UserPage";
import UserDetailContainer from "./containers/user/UserDetailContainer";

const App = ({ history }) => {
  const { auth } = useSelector((state) => state.authReducer);
  useEffect(() => {
    if (auth.email === "") {
      history.push("/login");
    }
  }, [auth]);
  return (
    <Switch>
      <Route component={MainPage} path="/" exact />
      <Route component={LoginPage} path="/login" />
      <Route component={RegisterPage} path="/register" />
      <Route component={ProductPage} path="/product" />
      <Route component={CouponPage} path="/coupon" />
      <Route component={UserPage} path="/user" />
      <Route component={UserDetailContainer} path="/user@check" />
      <Route component={NoticePage} path="/notice" />
      <Route component={SupportPage} path="/support" />
      <Route component={PurchasePage} path="/Purchase" />
    </Switch>
  );
};
export default withRouter(App);
