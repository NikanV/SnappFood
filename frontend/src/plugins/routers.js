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
    {path: "/", component: Home, name: 'HomePage'},
    {path: "/signup", component: localStorage.getItem('userid') ? Profile : Signup, name: 'SignupPage'},
    {path: "/login", component: localStorage.getItem('userid') ? Profile : Login, name: 'LoginPage',},
    {path: "/profile", component: localStorage.getItem('userid') ? Profile : Login, name: 'ProfilePage'},
    {path: "/profile/cart", component: localStorage.getItem('userid') ? Cart : Login, name: 'CartPage'},
    {path: "/restaurants", component: RestaurantList, name: 'RestaurantListPage'},
    {path: '/profile/settings', component: localStorage.getItem('userid') ? Settings : Login, name: 'Settings'},
    {path: '/profile/favorites', component: localStorage.getItem('userid') ? Favorites : Login, name: 'Favourites'},
    {path: '/profile/orders', component: localStorage.getItem('userid') ? Orders : Login, name: 'Orders'},
    {path: '/restaurants/selected-restaurant', component: localStorage.getItem('resid') ? RestaurantPage : RestaurantList, name: 'RestaurantPage'},
]


const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router