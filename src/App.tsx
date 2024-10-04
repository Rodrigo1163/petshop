import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/home"
import Layout from "./components/layout"
import Cart from "./pages/cart"

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/cart",
          element: <Cart />
        }
      ]
    }
  ])

  return <RouterProvider router={router} />
}

export default App
