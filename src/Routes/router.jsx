import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blogs from "../Pages/Blogs";
import Courses from "../Pages/Courses";
import Faq from "../Pages/Faq";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";



export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/course',
            element:  <Courses></Courses>,
            loader: ()=> fetch(`http://localhost:5000/courses`)
        },
        {
            path: '/faq',
            element:  <Faq></Faq>
        },
        {
            path: '/blogs',
            element: <Blogs></Blogs>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        }
      ]
    },
  ]);