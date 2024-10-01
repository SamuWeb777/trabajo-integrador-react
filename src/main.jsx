import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { makeServer } from './Server/MirageConf'
import "./index.css";
import App from "./App";
import { ContextProvider } from "./Components/utils/global.context";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import Details from "./Routes/Detail";

const router = createBrowserRouter([ 
  {
    path: "/",
    element: <App/>,
    children: [
      {
        index: true,
        element: <Home/>,
      },
      {
        path: "contacto",
        element: <Contact/>,

      },
      {
        path: "favoritos",
        element: <Favs/>,

      },
      {
        path: "detalles/:id",
        element: <Details/>
      },
    ]
  },
  
])
makeServer()
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextProvider>
      <RouterProvider router={router}/>
    </ContextProvider>
  </StrictMode>
);
