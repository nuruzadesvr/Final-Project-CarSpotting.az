import Dashboard from "../pages/Admin/Dashboard/Dashboard";
import SiteRoot from "../pages/Site/SiteRoot/SiteRoot";
import Home from "../pages/Site/Home/Home";
import Shop from "../pages/Site/Shop/Shop";
import News from "../pages/Site/News/News";
import Contact from "../pages/Site/Contact/Contact";
import About from "../pages/Site/About/About";
import AdminRoot from "../pages/Admin/AdminRoot/AdminRoot";
import Login from "../pages/Site/Login/Login";
import PersonRoot from "../pages/PersonRoot/PersonRoot";
import Register from "../pages/Site/Register/Register";
import Orders from "../pages/Admin/AdminSite/AdminOrders/Orders";
import AdminNews from "../pages/Admin/AdminSite/AdminNews/AdminNews";
import Settings from "../pages/Admin/AdminSite/AdminSettings/Settings"
import AdminUser from "../pages/Admin/AdminSite/AdminUser/AdminUser";
import AdminBlog from "../pages/Admin/AdminSite/AdminBlog/AdminBlog";
import AdminProduct from "../pages/Admin/AdminSite/AdminProduct/AdminProduct";
import AdminSlider from "../pages/Admin/AdminSite/AdminSlider/AdminSlider";
import AdminLandingPage from "../pages/Admin/AdminSite/AdminLandingPage/AdminLandingPage";
import AddLandingPost from "../pages/Admin/AdminSite/AddLandingPost/AddLandingPost";
import AddProduct from "../pages/Admin/AdminSite/AddProduct/AddProduct";
import AddNews from "../pages/Admin/AdminSite/AddNews/AddNews";

export const Routes = [
  {
    path: "/",
    element: <SiteRoot />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "news",
        element: <News />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "about",
        element: <About />,
      },
  
    ],
  },
  {
    path: "admin",
    element: <AdminRoot />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "orders",
        element: <Orders/>,
      }
      ,
      {
        path: "adminnews",
        element: <AdminNews/>,
      }
      ,
      {
        path: "orders",
        element: <Orders/>,
      }
      ,
      {
        path: "users",
        element: <AdminUser/>,
      }
      ,
      {
        path: "settings",
        element: <Settings/>,
      }
      ,
      {
        path: "blog",
        element: <AdminBlog/>,
      }
      ,
      {
        path: "products",
        element: <AdminProduct/>,
      }
      ,
      {
        path: "slider",
        element: <AdminSlider/>,
      }
      ,
      {
        path: "landingpagepost",
        element: <AdminLandingPage/>,
      }
      ,
      {
        path: "landingpagepost/create",
        element: <AddLandingPost/>,
      }
      ,
      {
        path: "products/create",
        element: <AddProduct/>,
      }
      ,
      {
        path: "adminnews/create",
        element: <AddNews/>,
      }
    ],
  },



  {
    path: "/",
    element: <PersonRoot/>,
    children: [
      {
        path: "/register",
        element: <Register/>,
      },
      {
        path: "/login",
        element: <Login/>,
      }
    ],
  },

];
