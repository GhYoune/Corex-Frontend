import { createRouter, createWebHistory } from "vue-router";
import TheTest from "../views/TheTest.vue";
import Onboarding from "../views/Anonymous/Onboarding/Onboarding.vue";

const routes = [
 {
  path: "/u",
  name: "Home",
  component: TheTest,
 },
 {
  path: "/onboarding",
  name: "Onboarding",
  component: Onboarding,
 },
];

const router = createRouter({
 history: createWebHistory(),
 routes,
});
export default router;
