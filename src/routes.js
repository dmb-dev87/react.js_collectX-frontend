import Dashboard from "views/Dashboard.js";
import Security from "views/Security";
import Referandearn from "views/Referandearn.js";
import Leaderboard from "views/Leaderboard";
import Login from "views/Login/Login";
import Register from "views/Login/Register";
import AssetsRoutes from "layouts/Admin/AssetsRoutes";
import SpotWalletRoutes from "layouts/Admin/SpotWalletRoutes";
import Discussion from "views/Discussion";
import Home from "views/Home.js";
import AssetMJRTrade from "views/AssetMJRTrade";
import Profile from "views/Profile";
import LeaderboardRoutes from "layouts/Admin/LeaderboardRoutes";

var routes = [
    {
        path: "/dashboard",
        name: "Dashboard",
        img: require("assets/img/menus/dashboard.svg"),
        component: Dashboard,
        layout: "/admin",
        auth: false,
    },
    {
        path: "/assets",
        name: "Collectibles",
        img: require("assets/img/menus/assets.svg"),
        subRoutes: [
            {
                path: "/explore",
                name: "Explore",
                layout: "/admin"
            },
            {
                path: "/my-assets",
                name: "My Collection",
                layout: "/admin"
            },
        ],
        component: AssetsRoutes,
        navicon_assets: true,
        layout: "/admin",
        auth: true,
    },
    {
        path: "/spot-wallet",
        name: "Wallet",
        img: require("assets/img/menus/spotwallet.png"),
        component: SpotWalletRoutes,
        subRoutes: [
            {
                path: "/balance",
                name: "Balance",
                layout: "/admin"
            },
            {
                path: "/deposit",
                name: "Deposit",
                layout: "/admin"
            },
            {
                path: "/withdraw",
                name: "Withdraw",
                layout: "/admin"
            },
            {
                path: "/history",
                name: "History",
                layout: "/admin"
            }
        ],
        layout: "/admin",
        auth: true,
    },
    {
        path: "/community",
        name: "Community",
        img: require("assets/img/menus/leaderboard.svg"),
        component: LeaderboardRoutes,
        subRoutes: [
            {
                path: "/discussion",
                name: "Discussion",
                layout: "/admin"
            },
            {
                path: "/leaderboard",
                name: "Leaderboard",
                layout: "/admin"
            }
        ],
        layout: "/admin",        
        auth: false,
    },
    {
        path: "/refer-earn",
        name: "Refer & Earn",
        component: Referandearn,
        layout: "/admin"
    },
    {
        path: "/security",
        name: "Security",
        component: Security,
        layout: "/admin"
    },
    {
        path: "/home",
        name: "Home",
        component: Home,
        layout: "/admin",
        auth: false,
    },
    {
        path: "/login",
        name: "Login",
        icon: "tim-icons icon-atom",
        component: Login,
        layout: "/Login"
    },
    {
        path: "/register",
        name: "Register",
        icon: "tim-icons icon-atom",
        component: Register,
        layout: "/Login"
    },
    {
        path: "/MJRTrade",
        name: "AssetMJRTrade",
        component: AssetMJRTrade,
        layout: "/Home"
    },
    {  
        path: "/profile",
        name: "Profile",
        component: Profile,
        layout: "/admin",
    },
];

export default routes;
