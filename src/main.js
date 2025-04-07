import "./style.css";
import "./assets/css/animate.css";
import "aos/dist/aos.css";
import "vue-toastification/dist/index.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import Toast from "vue-toastification";
import { VueFire, VueFireAuth } from "vuefire";
import { firebaseApp } from "./config/firebase";

// Font Awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons"; // íconos sólidos
import { far } from "@fortawesome/free-regular-svg-icons";
library.add(far);

library.add(fas);

const app = createApp(App);
const options = {
  position: "top-right",
  timeout: 5000,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: false,
  hideProgressBar: true,
  closeButton: "button",
  icon: true,
  rtl: false,
};

app.component("font-awesome-icon", FontAwesomeIcon);
app.use(Toast, options);
app.use(VueFire, {
  firebaseApp,
  modules: [VueFireAuth()],
});
app.use(createPinia());
app.use(router);

app.mount("#app");
