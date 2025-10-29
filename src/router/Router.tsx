import { createBrowserRouter } from "react-router";

import Landing from "../pages/landing/Landing";
import Feed from "../pages/feed/Feed";

const router = createBrowserRouter(
    [
        { path: "/", Component: Landing },
        { path: "feed", Component: Feed },
    ],
    { basename: "/dmi" }
);

export default router;
