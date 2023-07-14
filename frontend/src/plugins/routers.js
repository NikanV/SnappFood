import {createRouter, createWebHistory} from "vue-router";
import Home from "@/components/home.vue"
import Signup from "@/components/signup"
import Login from "@/components/login"
import CustomerProfile from "@/components/customerProfile"
import Cart from "@/components/cart"
import RestaurantList from "@/components/restaurantList"
import Settings from "@/components/settings.vue";
import Favorites from "@/components/favorites.vue";
import Orders from "@/components/orders.vue";
import RestaurantPage from "@/components/RestaurantPage.vue";
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
        name:"CustomerProfilePage",
        component:CustomerProfile,
        path:"/profile"
    },{
        name:"CartPage",
        component:Cart,
        path:"/cart"
    },{
        name:"RestaurantListPage",
        component:RestaurantList,
        path:"/restaurants"
    },{ path: '/profile/settings', component: Settings },
    { path: '/profile/favorites', component: Favorites },
    { path: '/profile/orders', component: Orders },
    { path: '/profile/orders', component: RestaurantPage },
]

const router = createRouter({
    history:createWebHistory(),
    routes
});

export default router