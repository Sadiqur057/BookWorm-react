import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import Home from './Pages/Home';
import BookDetails from './Pages/BookDetails';
import ListedBooks from './Pages/ListedBooks';
import PagesToRead from './Pages/PagesToRead';
import ErrorPage from './Pages/ErrorPage';
import Blogs from './Pages/Blogs';
import About from './Pages/About';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/book/:id",
        element: <BookDetails></BookDetails>
      },
      {
        path: "/listed",
        element: <ListedBooks></ListedBooks>
      },
      {
        path:"/blogs",
        loader: ()=> fetch('../blogs.json'),
        element: <Blogs></Blogs>,
      },
      {
        path: "/pages",
        element: <PagesToRead></PagesToRead>
      },
      {
        path: "/about",
        element: <About></About>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
