import HomePage from "./routes/homePage/homePage.jsx";
import { createBrowserRouter,RouterProvider, } from "react-router-dom";
import ListPage from "./routes/listPage/listPage.jsx";
import {Layout, RequireAuth} from "./routes/layout/layout.jsx";
import SinglePage from "./routes/singlePage/singlePage.jsx";
import Profile from "./routes/profile/profile.jsx";
import Login from "./routes/login/login.jsx";
import Register from "./routes/register/register.jsx";
import ProfileUpdate from './routes/profileUpdate/profileUpdate.jsx';
import NewPost from './routes/newPost/newPost.jsx';
import About from "./routes/about/about.jsx";
import Contact from "./routes/contact/contact.jsx";
import Agents from "./routes/agents/agents.jsx";
import { listPageLoader, profilePageLoader, singlePageLoader } from "./lib/loaders";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
          path:"/",
          element:<HomePage/>
        },
        {
          path:"/list",
          element:<ListPage/>,
          loader: listPageLoader,
        },
        {
          path:"/:id",
          element:<SinglePage/>,
          loader: singlePageLoader,
        },
        {
          path:"/login",
          element:<Login/>
        },
        {
          path:"/register",
          element:<Register/>
        },
        {
          path:"/about",
          element:<About/>
        },
        {
          path:"/contact",
          element:<Contact/>
        },
        {
          path:"/agents",
          element:<Agents/>
        },
      ],
    },
    {
      path: "/",
      element: <RequireAuth />,
      children: [
        {
          path: "/profile",
          element: <Profile />,
          loader: profilePageLoader
        },
        {
          path: "/profile/update",
          element: <ProfileUpdate />,
        },
        {
          path: "/add",
          element: <NewPost />,
        },
      ],
    },
  ]);

  return (
    <RouterProvider router={router}/>
  )
}

export default App