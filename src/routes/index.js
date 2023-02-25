import { createBrowserRouter } from "react-router-dom";
import AboutMe from "../pages/AboutMe";
import ErrorPage from "../pages/ErrorPage";
import ContactMe from "../pages/ContactMe";
import NouryIndex from "../pages/NouryIndex";
import RootLayout from "../pages/RootLayout";
import Certificates from "../pages/Certificates";
import Projects from "../pages/Projects";

export const router = createBrowserRouter([
  {
    path: "/NouryAtefNewPortfolio",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <NouryIndex /> },
      { path: "NouryAtefNewPortfolio/noury", element: <NouryIndex /> },
      { path: "noury/aboutMe", element: <AboutMe /> },
      { path: "noury/contactMe", element: <ContactMe /> },
      { path: "noury/certificates", element: <Certificates /> },
      { path: "noury/projects", element: <Projects /> },
    ],
  },
]);
