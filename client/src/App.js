import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
import './styles.scss';
import Topbar from './components/Topbar';
import Home from './pages/Home';
import Blogs from "./pages/Blogs";
import Products from './pages/Products';
import About from './pages/About';
import Footer from './components/Footer';
import Newsletter from './components/Newsletter';
import { useState } from "react";
import UserMenu from './components/UserMenu';



const Layout = () => {
  return (
    <>
      <Topbar />
      <Outlet />
      <Newsletter />
      <Footer />
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/read",
        element: <Blogs />
      },
      {
        path: "/products",
        element: <Products />
      },
      {
        path: "/about",
        element: <About />
      }
    ]
  }
])

function App() {
  const [user, setUser] = useState(true);
  return (
    <div className='app'>
      {user && <UserMenu />}
        <RouterProvider router={router} />
    </div>
  );
}



export default App;
