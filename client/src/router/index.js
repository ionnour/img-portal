import Vue from "vue";
import Router from "vue-router";
import HomePage from "./../components/HomePage.vue";
import Login from "./../components/Login.vue";
import Signup from "./../components/Signup.vue";
import Profile from "./../components/Profile.vue";
import ImageView from "./../components/ImageView.vue";

Vue.use(Router);

export default new Router({
  routes: [
    { path: "/", component: HomePage },
    { path: "/login", component: Login },
    { path: "/signup", component: Signup },
    { path: "/profile", component: Profile },
    { path: "/:id", component: ImageView }
  ]
});
