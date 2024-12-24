import { createRouter, createWebHistory } from "vue-router";

import HomeView from "@/app/main/views/HomeView.vue";
import ProstirLayout from "@/common/layouts/ProstirLayout.vue";
import ContactsView from "@/app/contacts/views/ContactsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Pablic",
      component: ProstirLayout,
      children: [
        {
          path: "/",
          name: "home",
          component: HomeView,
        },
        {
          path: "/contacts",
          name: "contacts",
          component: ContactsView,
        },
      ],
    },
  ],

  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

export default router;
