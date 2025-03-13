import { Button } from "@/components/ui/button";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import path from "path";
import SignUp from "./pages/Signup";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/signup",
      element: <SignUp></SignUp>,
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
