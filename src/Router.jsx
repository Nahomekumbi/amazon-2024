import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Landing from "./Pages/Landing/Landing"
import Auth from "./Pages/Auth/Auth"
import Payment from "./Pages/Payment/Payment"
import Orders from "./Pages/Orders/Orders"
import Cart from "./Pages/Cart/Cart"
import Result from "./Pages/Results/Result"
import ProductDetail from './Pages/ProductDetail/ProductDetail';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(
  "pk_test_51PJTzXGp9lhHlwQzFXH9r18sWxcnxHQ7XEDxGWWsATowN8j4N4ukHP5mmfQipx3bOMGUrKftWMzEaypHM9sil1Be00bbDMJhAK"
);
import ProtectedRoutes from './Components/ProtectedRoutes/ProtectedRoutes';

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route
          path="/payments"
          element={
            <ProtectedRoutes
              msg={"you must log in to pay"}
              redirect={"/payments"}
            >
              {" "}
              <Elements stripe={stripePromise}>
                <Payment />
              </Elements>
            </ProtectedRoutes>
          }
        />
        <Route
          path="/orders"
          element={
            <ProtectedRoutes
              msg={"you must log in to access your orders"}
              redirect={"/orders"}
            >
             
                <Orders />
            
            </ProtectedRoutes>
          }
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/category/:categoryName" element={<Result />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default Routing;