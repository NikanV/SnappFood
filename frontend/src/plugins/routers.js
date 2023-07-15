import {createRouter, createWebHistory} from "vue-router";
import Home from "@/components/home.vue"
import Signup from "@/components/signup"
import Login from "@/components/login"
import Profile from "@/components/profile.vue"
import Cart from "@/components/cart"
import RestaurantList from "@/components/restaurantList"
import Settings from "@/components/settings.vue";
import Favorites from "@/components/favorites.vue";
import Orders from "@/components/orders.vue";
import RestaurantPage from "@/components/restaurantPage.vue";

const routes = [
    {path: "/", component: Home, name:'HomePage'},
    {path: "/signup", component: Signup, name:'SignupPage'},
    {path: "/login", component: Login, name:'LoginPage'},
    {path: "/profile", component: Profile, name:'ProfilePage'},
    {path: "/cart", component: Cart, name:'CartPage'},
    {path: "/restaurants", component: RestaurantList, name:'RestaurantListPage'},
    {path: '/profile/settings', component: Settings, name:'Settings'},
    {path: '/profile/favorites', component: Favorites, name:'Favourites'},
    {path: '/profile/orders', component: Orders, name:'Orders'},
    {path: '/restaurants/selected-restaurant', component: RestaurantPage, name:'RestaurantPage'},
]


const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router