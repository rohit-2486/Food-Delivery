import React from "react";
import Body from "./Components/Body/Body";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Login from "./Components/Login/Login";
import RestaurantMenu from "./Components/RestaurantMenu/RestaurantMenu";
import { Provider } from "react-redux";
import store from "./Utils/Redux/store";
import About from "./Components/About/About";
import Cart from "./Components/Cart/Cart";

const App = () => {
  return (
    <Provider store={store}>
      <>
          <Navbar />
          <Outlet />
          <Footer />
      </>
    </Provider>
  );
};

export default App;

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
    ],
  },
]);
