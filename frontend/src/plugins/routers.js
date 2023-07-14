import {createRouter, createWebHistory} from "vue-router";
import Home from "@/components/home.vue"
import Signup from "@/components/signup"
import Login from "@/components/login"
import Profile from "@/components/profile"
import AddRestaurant from "@/components/AddRestaurant"
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
        name:"ProfilePage",
        component:Profile,
        path:"/profile"
    },{
        name:"AddRestaurantPage",
        component:AddRestaurant,
        path:"/add-restaurant"
    },

]

const router = createRouter({
    history:createWebHistory(),
    routes
});

export default router