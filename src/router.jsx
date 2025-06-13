import { createBrowserRouter } from "react-router";
import Layout from "./Layout";

// Pages
import HomePage from "./pages/HomePage/HomePage";
import NotFound from "./pages/NotFound/NotFound";
import Login from "./pages/Login/Login";
import CreateAccount from "./pages/CreateAccount/CreateAccount";
import AboutUs from "./pages/AboutUs/AboutUs";
import CartPage from "./pages/CartPage/CartPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import InvoicePage from "./pages/InvoicePage/InvoicePage";
import MoreInfo from "./pages/MoreInfo/MoreInfo";
import PaymentPage from "./pages/PaymentPage/PaymentPage";
import ProductComparison from "./pages/ProductComparison/ProductComparison";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import ProductPage from "./pages/ProductPage/ProductPage";
import Profile from "./pages/Profile/Profile";
import RequiredAuth from "./components/RequiredAuth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "login", element: <Login /> },
      { path: "signup", element: <CreateAccount /> },
      { path: "about", element: <AboutUs /> },
      { path: "cart", element: <CartPage /> },
      { path: "contact", element: <ContactPage /> },
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
            <Profile />
          </RequiredAuth>
        ),
      },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default router;
