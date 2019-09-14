import Vue from 'vue'
import VueRouter from "vue-router"
import App from './App.vue'
import HelloWorld from "./components/HelloWorld"
import Home from "./components/Home"
import PersonDetail from "./components/PersonDetail";
import Staff from "./components/Staff"
import axios from "axios"

window.axios = axios

Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/staff', component: Staff },
    { path: '/staff/:id', component: PersonDetail },
    { path: '/foo', component: HelloWorld, props: { msg: "World"} },
    { path: '/bar', component: HelloWorld, props: { msg: "Solar System"} }
  ]
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

