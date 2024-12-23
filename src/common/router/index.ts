import { createRouter, createWebHistory } from "vue-router";

import HomeView from "@/app/main/views/HomeView.vue";
import ProstirLayout from "../layouts/ProstirLayout.vue";

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
      ],
    },
  ],
});

export default router;
