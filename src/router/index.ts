import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import VkontakteView from "@/views/VkontakteView.vue";
import TravelView from "@/views/TravelView.vue";
import AboutView from "@/views/AboutView.vue";
import DevelopersView from "@/views/DevelopersView.vue";
import ContactsView from "@/views/ContactsView.vue";
import InstagramView from "@/views/InstagramView.vue";
import PartnershipView from "@/views/PartnershipView.vue";
import ProvidersView from "@/views/ProvidersView.vue";
import QuickStartView from "@/views/QuickStartView.vue";
import SupportView from "@/views/SupportView.vue";

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
		component: AboutView,
	},
	{
		path: "/contacts",
		name: "contacts",
		component: ContactsView,
	},
	{
		path: "/developers",
		name: "developers",
		component: DevelopersView,
	},
	{
		path: "/priem-platezhej-v-instagram",
		name: "instagram",
		component: InstagramView,
	},
	{
		path: "/partnership",
		name: "partnership",
		component: PartnershipView,
	},
	{
		path: "/providers",
		name: "providers",
		component: ProvidersView,
	},
	{
		path: "/quickstart",
		name: "quickstart",
		component: QuickStartView,
	},
	{
		path: "/support",
		name: "support",
		component: SupportView,
	},
	{
		path: "/travel",
		name: "travel",
		component: TravelView,
	},
	{
		path: "/priem-platezhej-vkontakte",
		name: "vkontakte",
		component: VkontakteView,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
