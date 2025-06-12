import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";

// Pages
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";
import AboutUs from "./pages/AboutUs";
import CartPage from "./pages/CartPage";
import ContactPage from "./pages/ContactPage";
import InvoicePage from "./pages/InvoicePage";
import MoreInfo from "./pages/MoreInfo";
import PaymentPage from "./pages/PaymentPage";
import ProductComparison from "./pages/ProductComparison";
import ProductDetails from "./pages/ProductDetails";
import ProductPage from "./pages/ProductPage";
import Profile from "./pages/Profile";
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
