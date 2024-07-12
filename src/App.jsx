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

function App() {
  const router = createBrowserRouter([
    { path: "/college-page", element: <CollegePage /> },
    { path: "/create-page", element: <CreateEvent /> },
    { path: "/events-page", element: <EventsPage /> },
    { path: "/", element: <LandingPage /> },
    { path: "/not-found", element: <NotFound /> },
    { path: "/signin", element: <SignIn /> },
    { path: "/signup", element: <SignUp /> },
    { path: "/event", element: <Event /> },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
