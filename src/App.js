import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Children } from "react";
import RootLayout from "./Components/Page-Route_Assignment/RootLayout";
import HomePage from "./Components/Page-Route_Assignment/Home-Page/HomePage";
import AboutPage from "./Components/Page-Route_Assignment/About-Page/AboutPage";
import LoginPage from "./Components/Page-Route_Assignment/Login-Page/LoginPage";
import QuizePage from "./Components/MCQ-Test-App/QuizePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/quize",
        element: <QuizePage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
