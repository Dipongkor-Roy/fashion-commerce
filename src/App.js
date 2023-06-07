import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Main from "./layout/Main";

import Hero from "./component/Hero/Hero";
import Middle from "./component/Middle/Middle";
import MiddleDown from "./component/MiddleDown/MiddleDown";
import Footer from "./component/Footer/Footer";
import Shop from "./component/Shop/Shop";
import Navbar from "./component/Navbar/Navbar";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
    },
    {
      path: "/shop",
      element: <Shop></Shop>,
    },
  ]);
  return (
    
    <div className="App">
      <Navbar></Navbar>
      <Hero></Hero>
      <Middle></Middle>
      <MiddleDown></MiddleDown>
      <Footer></Footer>
      <RouterProvider router={router}></RouterProvider>
    </div>
   
  );
}

export default App;
