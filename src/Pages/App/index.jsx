import { useRoutes, BrowserRouter } from "react-router-dom";
import Home from "../Home";
import MyOrder from "../MyOrder";
import MyOrders from "../MyOrders";
import MyAccount from "../MyAccount";
import NotFound from "../NotFound";
import SingIn from "../Signin";
import NavBar from "../../Components/NavBar/index";
import "./App.css";
import { ShoppingCardProvider } from "../../Context";
import CheckoutSideMenu from "../../Components/CheckoutSideMenu";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/:category", element: <Home /> },
    { path: "/my-account", element: <MyAccount /> },
    { path: "/my-order", element: <MyOrder /> },
    { path: "/my-orders", element: <MyOrders /> },
    { path: "/my-orders/:id", element: <MyOrder /> },
    { path: "/sign-in", element: <SingIn /> },
    { path: "/*", element: <NotFound /> },
  ]);
  return routes;
};

const App = () => {
  return (
    <ShoppingCardProvider>
      <BrowserRouter>
        <AppRoutes />
        <NavBar />
        <CheckoutSideMenu />
      </BrowserRouter>
    </ShoppingCardProvider>
  );
};

export default App;
