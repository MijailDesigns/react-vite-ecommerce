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

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/my-orders", element: <MyOrders /> },
    { path: "/my-order", element: <MyOrder /> },
    { path: "/my-account", element: <MyAccount /> },
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
      </BrowserRouter>
    </ShoppingCardProvider>
  );
};

export default App;
