import React from "react";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ProductsListing from "./components/Products/ProductsListing";
import ProductDetailsPage from "./components/Products/ProductDetailsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProductsListing />,
  },
  {
    path: "/product/:productId",
    element: <ProductDetailsPage />,
  },
]);

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <main>
          <RouterProvider router={router} />
        </main>
      </div>
    );
  }
}

export default App;
