import { createRouter, createWebHistory } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import ServicesView from "@/views/ServicesView.vue";
import GalleryView from "@/views/GalleryView.vue";
import AboutView from "@/views/AboutView.vue";
import ContactsView from "@/views/ContactsView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/services",
      name: "services",
      component: ServicesView,
    },
    {
      path: "/gallery",
      name: "gallery",
      component: GalleryView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/contacts",
      name: "contacts",
      component: ContactsView,
    },
  ],
});

export default router;
