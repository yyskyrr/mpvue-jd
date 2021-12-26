import Vue from "vue";
import App from "./App.vue";
import Vant from "vant";
import less from "less";
import "vant/lib/index.css";
import router from "./router";

Vue.config.productionTip = false;
Vue.use(less);
Vue.use(Vant);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
