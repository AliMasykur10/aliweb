import Vue from "vue";
import App from "./App.vue";
import VueRellax from "vue-rellax";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");

Vue.use(VueRellax);
