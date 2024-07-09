import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import CollegePage from "./pages/CollegePage";
import CreateEvent from "./pages/CreateEvent";
import EventsPage from "./pages/Eventspage";
import LandingPage from "./pages/LandingPage";
import NotFound from "./pages/NotFound";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <CollegePage /> },
    { path: "/", element: <CreateEvent /> },
    { path: "/", element: <EventsPage /> },
    { path: "/", element: <LandingPage /> },
    { path: "/", element: <NotFound /> },
    { path: "/", element: <SignIn /> },
    { path: "/", element: <SignUp /> },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
