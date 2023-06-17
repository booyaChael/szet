import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SzetPage from "./pages/SzetPage";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/subject/:subjectId", element: <SzetPage /> },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
