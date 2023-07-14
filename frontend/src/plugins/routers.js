import {createRouter, createWebHistory} from "vue-router";
import Home from "@/components/home.vue"
import Signup from "@/components/signup"
import Login from "@/components/login"
import OrderFood from "@/components/OrderFood";
import CustomerProfile from "@/components/customerProfile"
import Cart from "@/components/cart"
import RestaurantList from "@/components/restaurantList"
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
        name:"OrderFoodPage",
        component:OrderFood,
        path:"/order-food"
    },{
        name:"CustomerProfilePage",
        component:CustomerProfile,
        path:"/customer-profile"
    },{
        name:"CartPage",
        component:Cart,
        path:"/cart"
    },{
        name:"RestaurantListPage",
        component:RestaurantList,
        path:"/restaurants"
    },
]

const router = createRouter({
    history:createWebHistory(),
    routes
});

export default router