import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import VkontakteView from "@/views/VkontakteView.vue";

const routes: Array<RouteRecordRaw> = [
	{
		path: "/",
		name: "home",
		component: HomeView,
	},
	{
		path: "/about",
		name: "about",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
	},
	{
		path: "/contacts",
		name: "contacts",
		component: () => import("../views/ContactsView.vue"),
	},
	{
		path: "/developers",
		name: "developers",
		component: () => import("../views/DevelopersView.vue"),
	},
	{
		path: "/priem-platezhej-v-instagram",
		name: "instagram",
		component: () => import("../views/InstagramView.vue"),
	},
	{
		path: "/partnership",
		name: "partnership",
		component: () => import("../views/PartnershipView.vue"),
	},
	{
		path: "/providers",
		name: "providers",
		component: () => import("../views/ProvidersView.vue"),
	},
	{
		path: "/quickstart",
		name: "quickstart",
		component: () => import("../views/QuickStartView.vue"),
	},
	{
		path: "/support",
		name: "support",
		component: () => import("../views/SupportView.vue"),
	},
	{
		path: "/travel",
		name: "travel",
		component: () => import("../views/TravelView.vue"),
	},
	{
		path: "/vkontakte",
		name: "vkontakte",
		component: VkontakteView,
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;
