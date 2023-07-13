import {createRouter, createWebHistory} from "vue-router";
import Home from "@/components/home.vue"
import Signup from "@/components/signup"
import Login from "@/components/login"
import Profile from "@/components/profile"
import ForgotPassword from "@/components/forgotPassword"
const routes = [
    {
        name:"HomePage",
        component:Home,
        path:"/"
    },{
        name:"SignupPage",
        component:Signup,
        path:"/signup"
    },{
        name:"LoginPage",
        component:Login,
        path:"/login"
    },{
        name:"ForgotPasswordPage",
        component:ForgotPassword,
        path:"/forgot-password"
    },{
        name:"ProfilePage",
        component:Profile,
        path:"/profile"
    },
]

const router = createRouter({
    history:createWebHistory(),
    routes
});

export default router