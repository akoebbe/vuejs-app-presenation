import Vue from 'vue'
import VueRouter from "vue-router";
import App from './App.vue'
import HelloWorld from "./components/HelloWorld";
// import HelloSolarSystem from "./components/HelloSolarSystem";

Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    { path: '/', component: HelloWorld, props: { msg: "World"} },
    { path: '/bar', component: HelloWorld, props: { msg: "Solar System"} }
  ]
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
