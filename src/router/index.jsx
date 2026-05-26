import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage/HomePage";
import AboutPage from "../pages/AboutPage/AboutPage";
import TechnologyPage from "../pages/TechnologyPage/TechnologyPage";
import SolutionsPage from "../pages/SolutionsPage/SolutionsPage";
import BusinessPage from "../pages/BusinessPage/BusinessPage";
import NewsPage from "../pages/NewsPage/NewsPage";
import JoinPage from "../pages/JoinPage/JoinPage";
import ContactPage from "../pages/ContactPage/ContactPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "technology",
        element: <TechnologyPage />,
      },
      {
        path: "solutions",
        element: <SolutionsPage />,
      },
      {
        path: "business",
        element: <BusinessPage />,
      },
      {
        path: "news",
        element: <NewsPage />,
      },
      {
        path: "join",
        element: <JoinPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
    ],
  },
]);

export default router;
