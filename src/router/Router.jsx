import { createBrowserRouter } from "react-router"
import MainLayout from "../MainLayout"
import RouteTransition from "../components/RouteTransition"
import Home from "../Home"
import Category from "../Category"
import Login from "../Login"
import Register from "../Register"

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: (
          <RouteTransition>
            <Home />
          </RouteTransition>
        ),
      },
      {
        path: "/category",
        element: (
          <RouteTransition>
            <Category />
          </RouteTransition>
        ),
      },
    ],
  },
  // Auth pages as direct routes with RouteTransition
  {
    path: "/auth/login",
    element: (
      <RouteTransition>
        <Login />
      </RouteTransition>
    ),
  },
  {
    path: "/auth/register",
    element: (
      <RouteTransition>
        <Register />
      </RouteTransition>
    ),
  },
  // Backward compatibility redirects
  {
    path: "/login",
    element: (
      <RouteTransition>
        <Login />
      </RouteTransition>
    ),
  },
  {
    path: "/register",
    element: (
      <RouteTransition>
        <Register />
      </RouteTransition>
    ),
  },
])

export default router