import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Home from "./pages/Home";
import About from "./pages/About";
import Home from "./pages/Index";      // use Index.tsx instead of Home.tsx
import NotFound from "./pages/NotFound";// 


const router = createBrowserRouter(
  [
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
  ],
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true,
    },
  }
);

export default function App() {
  return <RouterProvider router={router} />;
}
