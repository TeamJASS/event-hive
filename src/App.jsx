import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import CollegePage from "./pages/CollegePage";
import CreateEvent from "./pages/CreateEvent";
import EventsPage from "./pages/EventsPage";
import LandingPage from "./pages/LandingPage";
import NotFound from "./pages/NotFound";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Event from "./pages/event";
import { Layout } from "./components/Layout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <LandingPage /> },
        { path: "/college", element: <CollegePage /> },
        { path: "/create-events", element: <CreateEvent /> },
        { path: "/events-page", element: <EventsPage /> },
        { path: "/event", element: <Event /> },
        { path: "*", element: <NotFound /> },
      ],
    },
    { path: "/signin", element: <SignIn /> },
    { path: "/signup", element: <SignUp /> },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
