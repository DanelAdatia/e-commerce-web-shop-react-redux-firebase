import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Details from "./components/Details";
import Homepage from "./components/HomePage";
import SignIn from "./SignIn-SignUp/SignIn";
import SignUp from "./SignIn-SignUp/SignUp";
import store from "./redux/store";
import CartItems from "./components/CartItems";
import "./ConfigFireBase";
import AddProducts from "./components/AddProducts";
import OrderNow from "./components/OrderNow";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ToastContainer />
        <BrowserRouter>
          <Routes>
            <Route
              index
              path="/"
              element={
                <ProtectedRoutes>
                  <Homepage />
                </ProtectedRoutes>
              }
            />
            <Route
              index
              path="/order"
              element={
                <ProtectedRoutes>
                  <OrderNow />
                </ProtectedRoutes>
              }
            />
            <Route
              index
              path="/addproducts"
              element={
                <ProtectedRoutes>
                  <AddProducts />
                </ProtectedRoutes>
              }
            />
            <Route
              index
              path="/details/:id"
              element={
                <ProtectedRoutes>
                  <Details />
                </ProtectedRoutes>
              }
            />
            <Route
              index
              path="/cartpage"
              element={
                <ProtectedRoutes>
                  <CartItems />
                </ProtectedRoutes>
              }
            />
            <Route index path="/signup" element={<SignUp />} />
            <Route index path="/signin" element={<SignIn />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}
export const ProtectedRoutes = ({ children }) => {
  if (localStorage.getItem("Current User")) {
    return children;
  } else {
    return <Navigate to="/signin" />;
  }
};

export default App;
