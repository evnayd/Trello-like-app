import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { store } from "./store/store";
//import { store } from "./store/store.js";
import App from "./App.vue";
import Home from "./components/Home.vue";
import BoardPage from "./components/BoardPage.vue";

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

    {
      path: "/board/:id",
      props: true,
      component: BoardPage,
      name: "Board",
    },
    /*{
      path: "/board",
      component: BoardPage,
      name: "Board",
    },*/
  ],
});

const app = createApp(App);

app.use(store);
app.use(router); //

app.mount("#app");
