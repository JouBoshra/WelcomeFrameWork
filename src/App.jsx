import "./App.css";
import Home from "./assets/components/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LayOut from "./assets/components/LayOut/LayOut";
import About from "./assets/components/About/About";
import Portfolio from "./assets/components/Portfolio/Portfolio";
import Contact from "./assets/components/Contact/Contact";

function App() {
  //--------create browser routers
  const routing = createBrowserRouter([
    {
      path: "",
      element: <LayOut />,
      children: [
        { index: true, element: <Home /> },
        { path: "About", element: <About /> },
        { path: "Portfolio", element: <Portfolio /> },
        { path: "Contact", element: <Contact /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={routing}></RouterProvider>
    </>
  );
}

export default App;
