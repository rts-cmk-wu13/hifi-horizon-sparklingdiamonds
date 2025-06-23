import { createBrowserRouter } from "react-router";
import Layout from "./Layout";

// Pages
import HomePage from "./pages/HomePage/HomePage";
import NotFound from "./pages/NotFound/NotFound";
import Login from "./pages/Login/Login";
import CreateAccount from "./pages/CreateAccount/CreateAccount";
import AboutUs from "./pages/AboutUs/AboutUs";
import CartPage from "./pages/CartPage/CartPage";
import Contact from "./pages/ContactPage/Contact";
import Thanks from "./pages/ContactPage/Thanks"
import InvoicePage from "./pages/InvoicePage/InvoicePage";
import MoreInfo from "./pages/MoreInfo/MoreInfo";
import PaymentPage from "./pages/PaymentPage/PaymentPage";
import ProductComparison from "./pages/ProductComparison/ProductComparison";
import ProductPage from "./pages/ProductPage/ProductPage";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Profile from "./pages/Profile/Profile";
import RequiredAuth from "./components/RequiredAuth";
import { handleSubmit } from "./pages/ContactPage/action";
import SuccessfulRegistration from "./pages/CreateAccount/SuccessfulRegistration";
import EditProfile from "./pages/Profile/EditProfile.jsx";
import MyOrders from "./pages/Profile/MyOrders.jsx";
import MyProfile from "./pages/Profile/MyProfileInfo.jsx";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "login", element: <Login /> },
      { path: "signup", element: <CreateAccount /> },
      { path: "success", element: <SuccessfulRegistration/>},
      { path: "about", element: <AboutUs /> },
      { path: "cart", element: <CartPage /> },
      { path: "contact", element: <Contact />, action: handleSubmit},
      { path: "thanks", element: <Thanks />},
      { path: "invoice", element: <InvoicePage /> },
      { path: "more-info", element: <MoreInfo /> },
      { path: "payment", element: <PaymentPage /> },
      { path: "compare", element: <ProductComparison /> },
      { path: "product/:id", element: <ProductDetails /> },
      { path: "products", element: <ProductPage /> },
      {
        path: "profile",
        element: (
          <RequiredAuth>
            <Profile/>
          </RequiredAuth>
        ),
        children: [
          { index: true, element: <MyProfile/>},
          { path:'myorders', element: <MyOrders/>} 
        ]
      },
      {
        path: "editprofile/:elmt",
        element: (
          <RequiredAuth>
            <EditProfile />
          </RequiredAuth>
        ),
      },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default router;
