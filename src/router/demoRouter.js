export const demoRouter = {
  path: "/demo",
  name: "demo",
  meta: { title: "测试" },
  component: () => import("@/views/components/card.vue"),
  children: [
    {
      path: "/demo/list",
      meta: { title: "demo测试" },
      component: () => import("@/views/demo/list.vue")
    }
  ]
};
