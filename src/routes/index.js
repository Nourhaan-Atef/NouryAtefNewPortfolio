import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../pages/RootLayout";
import ErrorPage from "../pages/ErrorPage";
import NouryIndex from "../pages/NouryIndex";
import AboutMe from "../pages/AboutMe";
import ContactMe from "../pages/ContactMe";
import Projects from "../pages/Projects";



export const router = createBrowserRouter([
  {
    path: "/NouryAtefNewPortfolio",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <NouryIndex /> },

      { path: "NouryAtefNewPortfolio/noury", element: <NouryIndex /> },
      { path: "NouryAtefNewPortfolio/noury/aboutMe", element: <AboutMe /> },
      { path: "NouryAtefNewPortfolio/noury/contactMe", element: <ContactMe /> },
      { path: "NouryAtefNewPortfolio/noury/projects", element: <Projects /> },
    ],
  },
]);
