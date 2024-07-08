import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import App from './component/App';
import Create from './component/Add';
import Delete from './component/Reject';
import Home from './component/Home';
import Update from './component/Update';
import View from './component/View';
import "./style.css";

var projectRoute = createBrowserRouter([
  {
    path:"",
    element:<App/>,
    children:[
      {path:"/" , element:<Home></Home>},
      {path:"/view", element:<View/>},
      {path:"/create", element:<Create/>},
      {path:"/delete",element:<Delete/>},
      {path:"/update",element:<Update/>},
      {path:"/home",element:<Home/>}
    ]
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={projectRoute}></RouterProvider>);