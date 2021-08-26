import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/signin",
    name: "Signin",
   
    component: () =>
      import("../views/Signin.vue")
  },
  {
    path: "/aritmetik",
    name: "Aritmetik",
   
    component: () =>
      import("../views/Aritmetik.vue")
  },
  {
    path: "/geometrik",
    name: "Geometrik",
   
    component: () =>
      import("../views/Geometrik.vue")
  },
  {
    path: "/harmonik",
    name: "Harmonik",
   
    component: () =>
      import("../views/Harmonik.vue")
  },
  {
    path: "/standartsapma",
    name: "Harmonik",
   
    component: () =>
      import("../views/StandartSapma.vue")
  },
  {
    path: "/modmedyan",
    name: "ModMedyan",
   
    component: () =>
      import("../views/ModMedyan.vue")
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
