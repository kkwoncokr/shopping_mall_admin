import React from "react";
import { Route } from "react-router-dom";
import BoardPage from "./pages/BoardPage";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import ProductPage from "./pages/ProductPage";
import PurchasePage from "./pages/PurchasePage";
import RegisterPage from "./pages/RegisterPage";

const App = () => (
  <>
    <Route component={MainPage} path="/" exact />
    <Route component={LoginPage} path="/login" />
    <Route component={RegisterPage} path="/register" />
    <Route component={ProductPage} path="/product" />
    <Route component={BoardPage} path="/board" />
    <Route component={PurchasePage} path="/Purchase" />
  </>
);

export default App;
