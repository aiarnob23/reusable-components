import "./index.css";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router/dom";
import router from "./routes/Routes";
import { ThemeProvider } from "./components/theme-provider";

const root = document.getElementById("root");

if (root) {
  ReactDOM.createRoot(root).render(
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
} else {
  throw new Error("Root element not found");
}
