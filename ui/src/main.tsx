import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import Search from "./pages/search";
import Results from "./pages/results";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Search />,
    },
    {
        path: "/results",
        element: <Results />,
    },
]);
createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Theme appearance="light">
            <RouterProvider router={router} />
        </Theme>
    </StrictMode>
);
