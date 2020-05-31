import Vue from "vue";
import VueRouter from "vue-router";

// const VoiceRecorder = () => import("../views/voicerecorder/VoiceRecorder.vue");

Vue.use(VueRouter);

const routes = [
  // {
  //   path: "/",
  //   name: "VoiceRecorder",
  //   component: VoiceRecorder,
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
