import { createBrowserRouter } from "react-router";

import Landing from "../pages/landing/Landing";
import Feed from "../pages/feed/Feed";
import Cart from "../pages/cart/Cart";

const router = createBrowserRouter(
    [
        { path: "/", Component: Landing },
        { path: "feed", Component: Feed },
        { path: "cart", Component: Cart },
    ],
    { basename: "/dmi" }
);

export default router;
