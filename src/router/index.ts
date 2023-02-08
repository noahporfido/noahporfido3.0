import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/Home/HomePage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "homePage",
      component: HomePage
    }
  ]
});

export default router;
