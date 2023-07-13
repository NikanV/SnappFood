import {createRouter, createWebHistory} from "vue-router";
import Home from "@/components/home.vue"
import Signup from "@/components/signup"
import Login from "@/components/login"
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
    },
]

const router = createRouter({
    history:createWebHistory(),
    routes
});

export default router