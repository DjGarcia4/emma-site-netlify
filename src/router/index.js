import { onMounted } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    // {
    //   path: "/store",
    //   name: "store",
    //   component: StoreView,
    // },
    // {
    //   path: "/store/:slug",
    //   name: "product",
    //   component: ProductView,
    // },
    {
      path: "/history",
      name: "history",
      component: () => import("../views/HistoryView.vue"),
    },
    {
      path: "/departments/:id",
      name: "departments",
      component: () => import("../views/DepartmentsView.vue"),
    },
    {
      path: "/services",
      name: "services",
      component: () => import("../views/ServicesView.vue"),
    },
    {
      path: "/blogs",
      name: "blogs",
      component: () => import("../views/blog/BlogsView.vue"),
    },
    {
      path: "/blog/:id",
      name: "blog",
      component: () => import("../views/blog/BlogView.vue"),
    },
    {
      path: "/about-us",
      name: "about-us",
      component: () => import("../views/About-usView.vue"),
    },
    // {
    //   path: "/contact",
    //   name: "contact",
    //   component: () => import("../views/ContactView.vue"),
    // },
  ],
});
router.beforeEach(async (to, from, next) => {
  setTimeout(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, 10);
  next();
});

export default router;
