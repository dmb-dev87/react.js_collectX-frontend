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


var routes = [
  {
    path: "/assets",
    name: "Assets",
    img: require("assets/img/menus/assets.svg"),
    subRoutes: [
      {
        path: "/explore",
        name: "Expolore",
        layout: "/admin"
      },
      {
        path: "/my-assets",
        name: "My Assets",
        layout: "/admin"
      },
    ],
    component: AssetsRoutes,
    navicon_assets: true,    
    layout: "/admin"
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    img: require("assets/img/menus/dashboard.svg"),
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/spot-wallet",
    name: "Spot Wallet",
    img: require("assets/img/menus/spotwallet.png"),
    navicon_wallet: true,
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
    layout: "/admin"
  },
  {
    path: "/refer-earn",
    name: "Refer & Earn",
    img: require("assets/img/menus/referandearn.svg"),
    component: Referandearn,
    layout: "/admin"
  },
  {
    path: "/security",
    name: "Security",
    component: Security,
    img: require("assets/img/menus/security.svg"),
    layout: "/admin"
  },
  {
    path: "/discussion",
    name: "Discussion",
    component: Discussion,
    img: require("assets/img/menus/discussion.svg"),
    layout: "/admin"
  },
  {
    path: "/leaderboard",
    name: "Leaderboard",
    img: require("assets/img/menus/leaderboard.svg"),
    component: Leaderboard,
    layout: "/admin"
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
    layout: "/home"
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
];

export default routes;
