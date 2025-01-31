import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import Search from "./pages/search";

const router = createBrowserRouter([
    {
        path: "search",
        element: <Search />,
    },
]);
createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Theme>
            <RouterProvider router={router} />
        </Theme>
    </StrictMode>
);
