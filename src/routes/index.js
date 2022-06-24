import { Explore, Following, Home } from "../pages";

// Public Routes
const publicRoutes = [
    { path: "/", component: Home },
    { path: "/following", component: Following },
    { path: "/explore", component: Explore },
];

// Private Routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
