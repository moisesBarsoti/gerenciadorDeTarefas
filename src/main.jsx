import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { TaskPage } from "./pages/TaskPage.jsx";
import { NotFoundPage } from "./pages/NotFoundPage.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/gerenciadordetarefas",
    element: <App />,
  },
  {
    path: "/task",
    element: <TaskPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
