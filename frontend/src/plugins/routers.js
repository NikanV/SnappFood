import {createRouter, createWebHistory} from "vue-router";
import Home from "@/components/home.vue"
import Signup from "@/components/signup"
import Login from "@/components/login"
import CustomerProfile from "@/components/profile.vue"
import Cart from "@/components/cart"
import RestaurantList from "@/components/restaurantList"
import Settings from "@/components/settings.vue";
import Favorites from "@/components/favorites.vue";
import Orders from "@/components/orders.vue";
import RestaurantPage from "@/components/restaurantPage.vue";

const routes = [
    {path: "/", component: Home},
    {path: "/signup", component: Signup},
    {path: "/login", component: Login},
    {path: "/profile", component: CustomerProfile},
    {path: "/cart", component: Cart},
    {path: "/restaurants", component: RestaurantList},
    {path: '/profile/settings', component: Settings},
    {path: '/profile/favorites', component: Favorites},
    {path: '/profile/orders', component: Orders},
    {path: '/profile/orders', component: RestaurantPage},
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router