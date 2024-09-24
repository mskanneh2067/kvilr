import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import {
  Top,
  Home,
  Login,
  Register,
  Dashboard,
  Footer,
  Menu,
  UserProfile,
} from "./routes/Routes";
import Profile from "./pages/profile/Profile";
import Accordian from "./components/accordian/Accordian";
import RandomColor from "./components/randomcolor/RandomColor";
import Rating from "./components/rating/Rating";
import ImageSlider from "./components/imageslider/ImageSlider";
import LoadMore from "./components/loadmore/LoadMore";

const App = () => {
  const Layout = () => {
    return (
      <>
        <div className=" bg-white text-[#002c38]">
          <Top />

          <div className="flex ">
            <div className="w-[127px] md:w-40 py-1 px-1  border-r-2 border-r-gray-400 ">
              <Menu />
            </div>
            <div className="w-full py-1 px-5">
              <Outlet />
            </div>
          </div>

          <Footer />
        </div>
      </>
    );
  };

  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: "dashboard",
          element: <Dashboard />,
        },
        {
          path: "profile",
          element: <Profile />,
        },
      ],
    },
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/createaccount",
      element: <Register />,
    },
    {
      path: "/faq",
      element: <Accordian />,
    },
    {
      path: "/random-color",
      element: <RandomColor />,
    },
    {
      path: "/rating",
      element: <Rating rating={10} />,
    },

    {
      path: "/image-slider",
      element: <ImageSlider url={"http://localhost:5000/api/v1/solutions"} />,
    },
    {
      path: "/load-more",
      element: <LoadMore />,
    },
    {
      path: "/user-profile",
      element: <UserProfile user="Mohammed Seyeh Kanneh"/>,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
