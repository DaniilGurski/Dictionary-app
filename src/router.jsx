import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import DefinitionDetails from "./pages/DefinitionDetails";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,

        children: [
            {
                path: ":word",
                element: <DefinitionDetails />
            },
        ]
    
    }
])