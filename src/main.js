import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { store } from "./store/store";
import App from "./App.vue";
import Home from "./components/Home.vue";

const router = createRouter({
  base: "/home/",

  history: createWebHistory(),
  routes: [
    {
      path: "/home",
      component: Home,
    },
    {
      path: "/",
      redirect: "/home",
    },
  ],
});

const app = createApp(App);

app.use(store);
app.use(router);

app.mount("#app");
